import { SyntaxKind } from "ts-morph";
import { ParsedTypeKind } from "./TypeNodeParsingHelper";
export default class StringUnionParsingHelper {
    static parseStringUnion(unionType, name, parseTypeReference) {
        return unionType.getTypeNodes().flatMap((n) => {
            if (n.isKind(SyntaxKind.LiteralType)) {
                return this.handleLiteralType(n, name);
            }
            else if (n.isKind(SyntaxKind.TypeReference)) {
                return this.handleTypeReference(n, parseTypeReference);
            }
            throw new Error(`Unexpected node kind ${n.getKindName()} while parsing string union "${name}".`);
        });
    }
    static handleTypeReference(n, parseTypeReference) {
        const identifier = n.getText();
        const parsedType = parseTypeReference(identifier);
        if (!parsedType || parsedType.kind === ParsedTypeKind.Object) {
            throw new Error(`Expected a union value for "${identifier}", received ${JSON.stringify(parsedType, null, 2)}`);
        }
        if (parsedType.kind === ParsedTypeKind.StringLiteral) {
            return parsedType.type;
        }
        const { unionValues } = parsedType;
        if (!unionValues) {
            throw new Error(`No union values found when parsing "${identifier}"`);
        }
        return unionValues;
    }
    static handleLiteralType(node, name) {
        const firstChild = node.getFirstChildOrThrow();
        if (!firstChild.isKind(SyntaxKind.StringLiteral)) {
            throw new Error(`Union types only support strings. Found a ${firstChild.getKindName()} ` +
                `within "${name}".`);
        }
        return firstChild.getLiteralText();
    }
}
//# sourceMappingURL=StringUnionParsingHelper.js.map