import { SpecialReactProps } from "../types/PropShape";
import { FileMetadataKind } from "../types/FileMetadata";
import FileMetadataParser from "../parsers/FileMetadataParser";
import StudioSourceFileParser from "../parsers/StudioSourceFileParser";
import tryUsingResult from "../errors/tryUsingResult";
import { ParsingErrorKind } from "../errors/ParsingError";
/**
 * ComponentFile is responsible for parsing a single component file, for example
 * `src/components/Banner.tsx`.
 */
export default class ComponentFile {
    studioSourceFileParser;
    fileMetadataParser;
    constructor(filepath, project) {
        this.studioSourceFileParser = new StudioSourceFileParser(filepath, project);
        this.fileMetadataParser = new FileMetadataParser(this.studioSourceFileParser);
    }
    getComponentMetadata() {
        return tryUsingResult(ParsingErrorKind.FailedToParseComponentMetadata, `Failed to parse ComponentMetadata for "${this.studioSourceFileParser.getFilepath()}"`, this._getComponentMetadata);
    }
    _getComponentMetadata = () => {
        this.studioSourceFileParser.checkForSyntaxErrors();
        let acceptsChildren = false;
        const onProp = (propName) => {
            if (propName === SpecialReactProps.Children) {
                acceptsChildren = true;
            }
            return propName !== SpecialReactProps.Children;
        };
        const filepath = this.studioSourceFileParser.getFilepath();
        return {
            kind: FileMetadataKind.Component,
            ...this.fileMetadataParser.parse(onProp),
            ...(acceptsChildren ? { acceptsChildren } : {}),
            filepath,
        };
    };
}
//# sourceMappingURL=ComponentFile.js.map