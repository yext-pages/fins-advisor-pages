import { TEMPLATE_CONFIG_VARIABLE_NAME } from "../constants";
/**
 * TemplateConfigParser is a class for parsing the template config in a PageFile.
 */
export default class TemplateConfigParser {
    studioSourceFileParser;
    constructor(studioSourceFileParser) {
        this.studioSourceFileParser = studioSourceFileParser;
    }
    /**
     * If the page has a template config exported, returns the scope of the
     * stream defined by it.
     */
    getStreamScope() {
        return this.getTemplateConfig()?.stream?.filter;
    }
    /** Returns the template config exported from the page if one is present. */
    getTemplateConfig() {
        const configObjectLiteralExp = this.studioSourceFileParser.getExportedObjectExpression(TEMPLATE_CONFIG_VARIABLE_NAME);
        return (configObjectLiteralExp &&
            this.studioSourceFileParser.getCompiledObjectLiteral(configObjectLiteralExp));
    }
}
//# sourceMappingURL=TemplateConfigParser.js.map