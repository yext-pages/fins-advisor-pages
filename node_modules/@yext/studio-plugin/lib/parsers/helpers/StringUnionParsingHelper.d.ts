import { UnionTypeNode } from "ts-morph";
import { ParsedType } from "./TypeNodeParsingHelper";
export default class StringUnionParsingHelper {
    static parseStringUnion(unionType: UnionTypeNode, name: string, parseTypeReference: (identifier: string) => ParsedType | undefined): string[];
    private static handleTypeReference;
    private static handleLiteralType;
}
//# sourceMappingURL=StringUnionParsingHelper.d.ts.map