import { PagesJsState } from "../types/PageState";
import GetPathParser from "./GetPathParser";
import TemplateConfigParser from "./TemplateConfigParser";
/**
 * PagesJsStateParser is a class for parsing the PagesJS-related information
 * (the {@link PagesJsState}) for a PageFile.
 */
export default class PagesJsStateParser {
    private getPathParser;
    private templateConfigParser;
    private entityFiles?;
    constructor(getPathParser: GetPathParser, templateConfigParser: TemplateConfigParser, entityFiles?: string[] | undefined);
    getPagesJsState(): PagesJsState;
}
//# sourceMappingURL=PagesJsStateParser.d.ts.map