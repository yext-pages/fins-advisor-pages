import { StreamScope } from "../types";
import StudioSourceFileParser from "./StudioSourceFileParser";
import { TemplateConfig } from "@yext/pages";
/**
 * TemplateConfigParser is a class for parsing the template config in a PageFile.
 */
export default class TemplateConfigParser {
    private studioSourceFileParser;
    constructor(studioSourceFileParser: StudioSourceFileParser);
    /**
     * If the page has a template config exported, returns the scope of the
     * stream defined by it.
     */
    getStreamScope(): StreamScope | undefined;
    /** Returns the template config exported from the page if one is present. */
    getTemplateConfig(): TemplateConfig | undefined;
}
//# sourceMappingURL=TemplateConfigParser.d.ts.map