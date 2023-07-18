import { ArrowFunction, FunctionDeclaration, OptionalKind, Project, PropertySignatureStructure, WriterFunction } from "ts-morph";
import { PropValues } from "../types";
/**
 * StudioSourceFileWriter contains shared business logic for
 * mutating source files used by Studio.
 */
export default class StudioSourceFileWriter {
    private filepath;
    private sourceFile;
    constructor(filepath: string, project: Project);
    /**
     * Run prettier on the source file's content.
     *
     * @returns the formatted content
     */
    prettify(): string;
    /**
     * Write content of SourceFile to its corresponding file
     */
    writeToFile(): void;
    /**
     * Mutates the source file by adding missing import declarations for identifiers
     * that are referenced in the file, removing import declarations that are no longer
     * needed, and adding any provided css imports.
     *
     * @param namedImports - named imports to add to the file
     * @param cssImports - css file paths to add as import declarations to the file
     * @param defaultImports - any default imports to add to the file
     */
    updateFileImports(namedImports: Record<string, string[]>, cssImports?: string[], defaultImports?: {
        name: string;
        moduleSpecifier: string;
    }[]): void;
    /**
     * Add an import to source file if it's not already imported, either
     * by setting default and named imports to an existing import declaration
     * matching the provided source or creating a new import declaration node.
     *
     * @param importData - the import and source identifier(s) to add to file.
     */
    addFileImport(importData: {
        source: string;
        defaultImport?: string;
        namedImports?: string[];
    }): void;
    /**
     * Update the variable statement by removing the existing one, if any, and
     * construct a new statement node with the provided content. The statement
     * is placed at the top of the file, under the last import statement, if any.
     *
     * @param name - the variable's name for the left side of the statement
     * @param content - the variable's content for the right side of the statement
     * @param type - the variable's type
     */
    updateVariableStatement(name: string, initializer: string | WriterFunction, type?: string): void;
    /**
     * Update the interface by removing the existing one, if any,
     * and construct a new interface node with the provided properties.
     * The interface is placed at the top of the file, under the last
     * import statement, if any.
     *
     * @param name - the interface's name
     * @param properties - the interface's properties
     */
    updateInterface(name: string, properties: OptionalKind<PropertySignatureStructure>[]): void;
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
    updateFunctionParameter(functionNode: FunctionDeclaration | ArrowFunction, type: string, propArgs?: string[] | string, index?: number): void;
    createDefaultFunction(name: string): FunctionDeclaration;
    createPropsObjectLiteralWriter(props: PropValues): WriterFunction;
    /**
     * Returns the prop value when writing a props object literal.
     */
    private getPropValueWriter;
    /**
     * Update the default export by removing the existing one, if any,
     * and construct a new default export node with the provided content.
     *
     * @param exportContent - the content to export
     */
    updateDefaultExport(exportContent: string | WriterFunction): void;
}
//# sourceMappingURL=StudioSourceFileWriter.d.ts.map