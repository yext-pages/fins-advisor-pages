import { StudioError } from "./StudioError";
export declare enum IOErrorKind {
    FailedToImportFile = "FailedToImportFile"
}
/**
 * A class representing errors that occur during interactions with the Filesystem.
 */
export declare class FileIOError extends StudioError<`${IOErrorKind}`> {
}
//# sourceMappingURL=FileIOError.d.ts.map