import { ComponentState } from "../types/ComponentState";
import StudioSourceFileParser from "./StudioSourceFileParser";
import ParsingOrchestrator from "../ParsingOrchestrator";
export type GetFileMetadata = ParsingOrchestrator["getFileMetadata"];
export default class ComponentTreeParser {
    private studioSourceFileParser;
    private getFileMetadata;
    constructor(studioSourceFileParser: StudioSourceFileParser, getFileMetadata: GetFileMetadata);
    parseComponentTree(defaultImports: Record<string, string>): ComponentState[];
    private parseComponentState;
    private parseRepeaterElement;
    private parseElement;
}
//# sourceMappingURL=ComponentTreeParser.d.ts.map