import { SyntaxKind, FunctionDeclaration, ArrowFunction, KindToNodeMappings } from "ts-morph";
import StudioSourceFileParser from "./StudioSourceFileParser";
import { OneOf } from "./helpers/TsMorphHelpers";
import { GetPathVal } from "../types";
declare const STRING_KINDS: readonly [SyntaxKind.StringLiteral, SyntaxKind.PropertyAccessExpression, SyntaxKind.TemplateExpression, SyntaxKind.ElementAccessExpression, SyntaxKind.NoSubstitutionTemplateLiteral];
type StringNode = KindToNodeMappings[OneOf<typeof STRING_KINDS>];
/**
 * GetPathParser is a class for parsing the getPath function in a PageFile.
 */
export default class GetPathParser {
    private studioSourceFileParser;
    constructor(studioSourceFileParser: StudioSourceFileParser);
    /**
     * Gets the return value of the getPath function if one is defined, and if
     * there is a single, top-level, string literal or expression returned from
     * it.
     */
    parseGetPathValue(): GetPathVal | undefined;
    /**
     * If a getPath function is defined and a single, top-level, string literal
     * or expression is returned from it, returns it. If a getPath function is
     * not defined, an error is thrown.
     */
    getReturnStringNode(): StringNode | undefined;
    /**
     * Returns the getPath function if one is defined.
     */
    findGetPathFunction(): FunctionDeclaration | ArrowFunction | undefined;
    private handleBlock;
    private getStringNode;
}
export {};
//# sourceMappingURL=GetPathParser.d.ts.map