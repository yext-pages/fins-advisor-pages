/**
 * An abstract class that represents the different kinds of errors that can occur within Studio.
 */
export declare abstract class StudioError<T> {
    kind: T;
    message: string;
    stack?: string;
    constructor(kind: T, message: string, stack?: string);
}
//# sourceMappingURL=StudioError.d.ts.map