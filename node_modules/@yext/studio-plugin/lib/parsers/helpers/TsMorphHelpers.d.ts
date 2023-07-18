import { KindToNodeMappings, Node, SyntaxKind } from "ts-morph";
export default class TsMorphHelpers {
    private static getChildOfKind;
    private static getChildOfKindOrThrow;
    /**
     * Similar to ts-morph's getFirstChildByKindOrThrow but accepts multiple kinds.
     */
    static getFirstChildOfKindOrThrow<T extends ReadonlyArray<SyntaxKind>>(node: Node, ...kinds: T): KindToNodeMappings[OneOf<T>];
    /**
     * Similar to ts-morph's getFirstChildByKind but accepts multiple kinds.
     */
    static getFirstChildOfKind<T extends ReadonlyArray<SyntaxKind>>(node: Node, ...kinds: T): KindToNodeMappings[OneOf<T>] | undefined;
    /**
     * Similar to ts-morph's getLastChildByKindOrThrow but accepts multiple kinds.
     */
    static getLastChildOfKindOrThrow<T extends ReadonlyArray<SyntaxKind>>(node: Node, ...kinds: T): KindToNodeMappings[OneOf<T>];
    /**
     * Similar to ts-morph's isKind but accepts multiple kinds.
     */
    static isKind<T extends ReadonlyArray<SyntaxKind>>(node: Node, ...kinds: T): node is KindToNodeMappings[OneOf<T>];
}
export type OneOf<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<infer OneOf> ? OneOf : never;
//# sourceMappingURL=TsMorphHelpers.d.ts.map