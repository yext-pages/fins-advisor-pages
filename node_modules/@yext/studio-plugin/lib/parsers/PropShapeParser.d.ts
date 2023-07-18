import { PropShape } from "../types/PropShape";
import StudioSourceFileParser from "./StudioSourceFileParser";
/**
 * PropShapeParser is a class for parsing a typescript interface into a PropShape.
 */
export default class PropShapeParser {
    private studioSourceFileParser;
    private studioImports;
    constructor(studioSourceFileParser: StudioSourceFileParser);
    /**
     * Get the PropShape of a specific type or interface.
     */
    parseShape(identifier: string, onProp?: (propName: string) => boolean): PropShape;
    private toPropShape;
    private toPropMetadata;
    private getPropType;
}
//# sourceMappingURL=PropShapeParser.d.ts.map