import { PAGESJS_TEMPLATE_PROPS_TYPE, PAGES_PACKAGE_NAME } from "../constants";
/**
 * PagesJsWriter is a class for housing the PagesJS-specific updating logic for
 * a PageFile.
 */
export default class PagesJsWriter {
    studioSourceFileWriter;
    constructor(studioSourceFileWriter) {
        this.studioSourceFileWriter = studioSourceFileWriter;
    }
    /** Adds named imports from the PagesJS package. */
    addPagesJsImports(namedImports) {
        this.studioSourceFileWriter.addFileImport({
            source: PAGES_PACKAGE_NAME,
            namedImports,
        });
    }
    /** Adds a destructured template props paramater to the function. */
    addTemplateParameter(componentFunction) {
        this.studioSourceFileWriter.updateFunctionParameter(componentFunction, PAGESJS_TEMPLATE_PROPS_TYPE, ["document"]);
    }
}
//# sourceMappingURL=PagesJsWriter.js.map