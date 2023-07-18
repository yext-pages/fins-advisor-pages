import { Result } from "true-myth";
import { ParsingError, ParsingErrorKind } from "./ParsingError";
export default function tryUsingResult<T>(errorKind: ParsingErrorKind, message: string, body: () => T): Result<T, ParsingError>;
//# sourceMappingURL=tryUsingResult.d.ts.map