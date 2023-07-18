import { SyntaxKind } from "ts-morph";
export default class TsMorphHelpers {
    static getChildOfKind(getChild, ...kinds) {
        return getChild((n) => kinds.some((k) => n.isKind(k)));
    }
    static getChildOfKindOrThrow(node, getChild, ...kinds) {
        const foundNode = TsMorphHelpers.getChildOfKind(getChild, ...kinds);
        if (!foundNode) {
            throw new Error(`Could not find a child of kind ${kinds
                .map((k) => {
                const expectedKindName = Object.entries(SyntaxKind).find(([_, value]) => value === k)?.[0];
                return expectedKindName;
            })
                .join(", ")} in node \`${node.getFullText()}\`.`);
        }
        return foundNode;
    }
    /**
     * Similar to ts-morph's getFirstChildByKindOrThrow but accepts multiple kinds.
     */
    static getFirstChildOfKindOrThrow(node, ...kinds) {
        return this.getChildOfKindOrThrow(node, (condition) => node.getFirstChild(condition), ...kinds);
    }
    /**
     * Similar to ts-morph's getFirstChildByKind but accepts multiple kinds.
     */
    static getFirstChildOfKind(node, ...kinds) {
        return this.getChildOfKind((condition) => node.getFirstChild(condition), ...kinds);
    }
    /**
     * Similar to ts-morph's getLastChildByKindOrThrow but accepts multiple kinds.
     */
    static getLastChildOfKindOrThrow(node, ...kinds) {
        return this.getChildOfKindOrThrow(node, (condition) => node.getLastChild(condition), ...kinds);
    }
    /**
     * Similar to ts-morph's isKind but accepts multiple kinds.
     */
    static isKind(node, ...kinds) {
        return kinds.some((k) => node.isKind(k));
    }
}
//# sourceMappingURL=TsMorphHelpers.js.map