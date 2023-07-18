import { StudioError } from "./StudioError";
export var ParsingErrorKind;
(function (ParsingErrorKind) {
    ParsingErrorKind["FailedToParsePageState"] = "FailedToParsePageState";
    ParsingErrorKind["InvalidStudioConfig"] = "InvalidStudioConfig";
    ParsingErrorKind["FailedToParseComponentMetadata"] = "FailedToParseComponentMetadata";
    ParsingErrorKind["FailedToParseModuleMetadata"] = "FailedToParseModuleMetadata";
})(ParsingErrorKind || (ParsingErrorKind = {}));
/**
 * A class representing errors that occur during the parsing of Components,
 * their Prop interfaces, or Component Trees.
 */
export class ParsingError extends StudioError {
}
//# sourceMappingURL=ParsingError.js.map