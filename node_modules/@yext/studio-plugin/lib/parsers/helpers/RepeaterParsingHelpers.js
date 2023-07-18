import { SyntaxKind, } from "ts-morph";
import StaticParsingHelpers from "./StaticParsingHelpers";
import TsMorphHelpers from "./TsMorphHelpers";
/**
 * RepeaterParsingHelpers is a static class for housing lower level details for parsing
 * repeater components within Studio.
 */
export default class RepeaterParsingHelpers {
    static parseMapExpression(c) {
        const arrowFunction = c.getFirstDescendantByKindOrThrow(SyntaxKind.ArrowFunction);
        const itemText = arrowFunction
            .getFirstDescendantByKind(SyntaxKind.SyntaxList)
            ?.getFirstChildByKind(SyntaxKind.Parameter)
            ?.getFirstChildByKind(SyntaxKind.Identifier)
            ?.getText();
        if (itemText && itemText !== "item") {
            throw new Error(`Error parsing map expression: name of item being mapped must be "item". Found ${itemText}.`);
        }
        const selfClosingElement = this.parseMapFunctionBody(arrowFunction);
        const listExpression = this.parseMapListExpression(c);
        return { selfClosingElement, listExpression };
    }
    static parseMapFunctionBody(arrowFunction) {
        const functionBody = TsMorphHelpers.getLastChildOfKindOrThrow(arrowFunction, SyntaxKind.ParenthesizedExpression, SyntaxKind.JsxSelfClosingElement, SyntaxKind.Block);
        function getSelfClosingErrorText(exp) {
            return ("Error parsing map expression: function must return a single" +
                " self-closing JSX element with no children." +
                ` Found ${exp.getText()}.`);
        }
        let selfClosingElement;
        if (functionBody.isKind(SyntaxKind.JsxSelfClosingElement)) {
            selfClosingElement = functionBody;
        }
        else if (functionBody.isKind(SyntaxKind.ParenthesizedExpression)) {
            const unwrappedExp = StaticParsingHelpers.unwrapParensExpression(functionBody);
            selfClosingElement = unwrappedExp.getFirstChildByKindOrThrow(SyntaxKind.JsxSelfClosingElement, getSelfClosingErrorText(unwrappedExp));
        }
        else {
            const returnStatement = functionBody.getFirstDescendantByKindOrThrow(SyntaxKind.ReturnStatement);
            const parensExpression = returnStatement.getFirstChildByKind(SyntaxKind.ParenthesizedExpression);
            const jsxNodeWrapper = parensExpression
                ? StaticParsingHelpers.unwrapParensExpression(parensExpression)
                : returnStatement;
            selfClosingElement = jsxNodeWrapper.getFirstChildByKindOrThrow(SyntaxKind.JsxSelfClosingElement, getSelfClosingErrorText(jsxNodeWrapper));
        }
        return selfClosingElement;
    }
    static parseMapListExpression(c) {
        const propertyAccess = c.getFirstDescendantByKindOrThrow(SyntaxKind.PropertyAccessExpression);
        return TsMorphHelpers.getFirstChildOfKindOrThrow(propertyAccess, SyntaxKind.PropertyAccessExpression, SyntaxKind.Identifier).getText();
    }
}
//# sourceMappingURL=RepeaterParsingHelpers.js.map