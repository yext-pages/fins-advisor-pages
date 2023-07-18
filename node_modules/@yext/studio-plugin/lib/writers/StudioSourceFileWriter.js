import { SyntaxKind, VariableDeclarationKind, Writers, } from "ts-morph";
import prettier from "prettier";
import fs from "fs";
import { PropValueKind, PropValueType } from "../types";
/**
 * StudioSourceFileWriter contains shared business logic for
 * mutating source files used by Studio.
 */
export default class StudioSourceFileWriter {
    filepath;
    sourceFile;
    constructor(filepath, project) {
        this.filepath = filepath;
        if (!project.getSourceFile(filepath)) {
            project.addSourceFileAtPath(filepath);
        }
        this.sourceFile = project.getSourceFileOrThrow(filepath);
    }
    /**
     * Run prettier on the source file's content.
     *
     * @returns the formatted content
     */
    prettify() {
        return prettier.format(this.sourceFile.getFullText(), {
            parser: "typescript",
        });
    }
    /**
     * Write content of SourceFile to its corresponding file
     */
    writeToFile() {
        const updatedFileText = this.prettify();
        fs.writeFileSync(this.filepath, updatedFileText);
    }
    /**
     * Mutates the source file by adding missing import declarations for identifiers
     * that are referenced in the file, removing import declarations that are no longer
     * needed, and adding any provided css imports.
     *
     * @param namedImports - named imports to add to the file
     * @param cssImports - css file paths to add as import declarations to the file
     * @param defaultImports - any default imports to add to the file
     */
    updateFileImports(namedImports, cssImports, defaultImports) {
        const structures = Object.keys(namedImports).map((moduleSpecifier) => ({
            moduleSpecifier,
            namedImports: namedImports[moduleSpecifier],
        }));
        this.sourceFile.addImportDeclarations(structures);
        defaultImports?.forEach(({ name, moduleSpecifier }) => {
            this.sourceFile.addImportDeclaration({
                defaultImport: name,
                moduleSpecifier,
            });
        });
        this.sourceFile.fixMissingImports();
        cssImports?.forEach((importSource) => {
            this.sourceFile.addImportDeclaration({
                moduleSpecifier: importSource,
            });
        });
        this.sourceFile.organizeImports();
    }
    /**
     * Add an import to source file if it's not already imported, either
     * by setting default and named imports to an existing import declaration
     * matching the provided source or creating a new import declaration node.
     *
     * @param importData - the import and source identifier(s) to add to file.
     */
    addFileImport(importData) {
        const { source, namedImports, defaultImport } = importData;
        const importDeclaration = this.sourceFile.getImportDeclaration((i) => i.getModuleSpecifierValue() === source);
        if (importDeclaration) {
            namedImports && importDeclaration.addNamedImports(namedImports);
            defaultImport && importDeclaration.setDefaultImport(defaultImport);
        }
        else {
            this.sourceFile.addImportDeclaration({
                moduleSpecifier: source,
                namedImports,
                defaultImport,
            });
        }
    }
    /**
     * Update the variable statement by removing the existing one, if any, and
     * construct a new statement node with the provided content. The statement
     * is placed at the top of the file, under the last import statement, if any.
     *
     * @param name - the variable's name for the left side of the statement
     * @param content - the variable's content for the right side of the statement
     * @param type - the variable's type
     */
    updateVariableStatement(name, initializer, type) {
        const variableStatement = this.sourceFile.getVariableStatement(name);
        variableStatement?.remove();
        const lastImportStatementIndex = this.sourceFile
            .getLastChildByKind(SyntaxKind.ImportDeclaration)
            ?.getChildIndex() ?? -1;
        this.sourceFile.insertVariableStatement(lastImportStatementIndex + 1, {
            isExported: true,
            declarationKind: VariableDeclarationKind.Const,
            declarations: [{ name, type, initializer }],
        });
    }
    /**
     * Update the interface by removing the existing one, if any,
     * and construct a new interface node with the provided properties.
     * The interface is placed at the top of the file, under the last
     * import statement, if any.
     *
     * @param name - the interface's name
     * @param properties - the interface's properties
     */
    updateInterface(name, properties) {
        const interfaceDeclaration = this.sourceFile.getInterface(name);
        interfaceDeclaration?.remove();
        const lastImportStatementIndex = this.sourceFile
            .getLastChildByKind(SyntaxKind.ImportDeclaration)
            ?.getChildIndex() ?? -1;
        this.sourceFile.insertInterface(lastImportStatementIndex + 1, {
            isExported: true,
            name,
            properties,
        });
    }
    /**
     * Update the function's parameter by removing the existing parameter
     * at the specified index, if any, and insert a new parameter with
     * the provided content. If props are passed in, the content is in the
     * form of ObjectBindingPattern (e.g. \{ x, y \}: PropsType).
     * Otherwise, it is in the form of `props: PropsType`.
     *
     * @param functionNode - the function node to modify the parameter
     * @param type - the type of the parameter
     * @param propArgs - the props to destructure in the ObjectBindingPattern
     * @param index - the index of the parameter to update or insert
     */
    updateFunctionParameter(functionNode, type, propArgs, index = 0) {
        functionNode.getParameters()[index]?.remove();
        if (propArgs) {
            functionNode.insertParameter(index, {
                name: Array.isArray(propArgs) ? `{ ${propArgs.join(", ")} }` : propArgs,
                type,
            });
        }
    }
    createDefaultFunction(name) {
        return this.sourceFile.addFunction({
            name,
            isDefaultExport: true,
        });
    }
    createPropsObjectLiteralWriter(props) {
        return Writers.object(Object.entries(props).reduce((obj, entry) => {
            const [propName, propVal] = entry;
            if (propVal.kind === PropValueKind.Expression) {
                throw new Error(`PropVal ${propName} in ${this.filepath} is of kind PropValueKind.Expression.` +
                    " PropValueKind.Expression in ObjectLiteralExpression is currently not supported.");
            }
            // Writers.object does not automatically wrap keys in quotes that need it.
            // Our linting step will remove unnecessary quotes if desired.
            const propNameWithQuotes = `"${propName}"`;
            obj[propNameWithQuotes] = this.getPropValueWriter(propVal);
            return obj;
        }, {}));
    }
    /**
     * Returns the prop value when writing a props object literal.
     */
    getPropValueWriter({ valueType, value, }) {
        switch (valueType) {
            case PropValueType.string:
            case PropValueType.HexColor:
                return `'${value}'`;
            case PropValueType.Object:
                return this.createPropsObjectLiteralWriter(value);
            default:
                return value.toString();
        }
    }
    /**
     * Update the default export by removing the existing one, if any,
     * and construct a new default export node with the provided content.
     *
     * @param exportContent - the content to export
     */
    updateDefaultExport(exportContent) {
        this.sourceFile.removeDefaultExport();
        this.sourceFile.addExportAssignment({
            isExportEquals: false,
            expression: exportContent,
        });
    }
}
//# sourceMappingURL=StudioSourceFileWriter.js.map