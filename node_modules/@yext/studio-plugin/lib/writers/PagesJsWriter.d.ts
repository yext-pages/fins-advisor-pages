import StudioSourceFileWriter from "./StudioSourceFileWriter";
import { ArrowFunction, FunctionDeclaration } from "ts-morph";
/**
 * PagesJsWriter is a class for housing the PagesJS-specific updating logic for
 * a PageFile.
 */
export default class PagesJsWriter {
    private studioSourceFileWriter;
    constructor(studioSourceFileWriter: StudioSourceFileWriter);
    /** Adds named imports from the PagesJS package. */
    addPagesJsImports(namedImports: string[]): void;
    /** Adds a destructured template props paramater to the function. */
    addTemplateParameter(componentFunction: FunctionDeclaration | ArrowFunction): void;
}
//# sourceMappingURL=PagesJsWriter.d.ts.map