import { StudioError } from "./StudioError";
export declare enum ParsingErrorKind {
    FailedToParsePageState = "FailedToParsePageState",
    InvalidStudioConfig = "InvalidStudioConfig",
    FailedToParseComponentMetadata = "FailedToParseComponentMetadata",
    FailedToParseModuleMetadata = "FailedToParseModuleMetadata"
}
/**
 * A class representing errors that occur during the parsing of Components,
 * their Prop interfaces, or Component Trees.
 */
export declare class ParsingError extends StudioError<`${ParsingErrorKind}`> {
}
//# sourceMappingURL=ParsingError.d.ts.map