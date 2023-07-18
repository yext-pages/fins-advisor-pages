import { Result } from "true-myth";
import { ParsingError } from "./ParsingError";
import prettyPrintError from "./prettyPrintError";
export default function tryUsingResult(errorKind, message, body) {
    try {
        return Result.ok(body());
    }
    catch (err) {
        if (!(err instanceof Error)) {
            throw err;
        }
        prettyPrintError(message, err.stack);
        return Result.err(new ParsingError(errorKind, err.message, err.stack));
    }
}
//# sourceMappingURL=tryUsingResult.js.map