import { StudioError } from "./StudioError";
export var IOErrorKind;
(function (IOErrorKind) {
    IOErrorKind["FailedToImportFile"] = "FailedToImportFile";
})(IOErrorKind || (IOErrorKind = {}));
/**
 * A class representing errors that occur during interactions with the Filesystem.
 */
export class FileIOError extends StudioError {
}
//# sourceMappingURL=FileIOError.js.map