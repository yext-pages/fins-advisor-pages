import { SimpleGit } from "simple-git";
import { GitData } from "../types";
export default class GitWrapper {
    private git;
    private gitData?;
    constructor(git: SimpleGit);
    setup(): Promise<void>;
    deploy(): Promise<void>;
    getStoredData(): GitData | undefined;
    private canPush;
    refreshData(): Promise<void>;
}
//# sourceMappingURL=GitWrapper.d.ts.map