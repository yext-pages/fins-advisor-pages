import { PropValueKind } from "../types";
/**
 * PagesJsStateParser is a class for parsing the PagesJS-related information
 * (the {@link PagesJsState}) for a PageFile.
 */
export default class PagesJsStateParser {
    getPathParser;
    templateConfigParser;
    entityFiles;
    constructor(getPathParser, templateConfigParser, entityFiles) {
        this.getPathParser = getPathParser;
        this.templateConfigParser = templateConfigParser;
        this.entityFiles = entityFiles;
    }
    getPagesJsState() {
        const streamScope = this.templateConfigParser.getStreamScope();
        let getPathValue = this.getPathParser.parseGetPathValue();
        if (getPathValue?.kind === PropValueKind.Expression && !streamScope) {
            getPathValue = undefined;
        }
        return {
            ...(this.entityFiles && { entityFiles: this.entityFiles }),
            getPathValue,
            ...(streamScope && { streamScope }),
        };
    }
}
//# sourceMappingURL=PagesJsStateParser.js.map