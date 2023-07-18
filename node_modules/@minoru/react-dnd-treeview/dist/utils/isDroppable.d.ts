import { NodeModel, TreeState } from "../types";
export declare const isDroppable: <T>(dragSourceId: NodeModel["id"] | undefined, dropTargetId: NodeModel["id"], treeContext: TreeState<T>) => boolean;
