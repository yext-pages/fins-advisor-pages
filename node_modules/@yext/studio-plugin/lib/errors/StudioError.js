/**
 * An abstract class that represents the different kinds of errors that can occur within Studio.
 */
export class StudioError {
    kind;
    message;
    stack;
    constructor(kind, message, stack) {
        this.kind = kind;
        this.message = message;
        this.stack = stack;
    }
}
//# sourceMappingURL=StudioError.js.map