import { JsxSelfClosingElement, JsxExpression } from "ts-morph";
/**
 * RepeaterParsingHelpers is a static class for housing lower level details for parsing
 * repeater components within Studio.
 */
export default class RepeaterParsingHelpers {
    static parseMapExpression(c: JsxExpression): {
        selfClosingElement: JsxSelfClosingElement;
        listExpression: string;
    };
    private static parseMapFunctionBody;
    private static parseMapListExpression;
}
//# sourceMappingURL=RepeaterParsingHelpers.d.ts.map