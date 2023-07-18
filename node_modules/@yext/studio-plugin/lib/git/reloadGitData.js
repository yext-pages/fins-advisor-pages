import VirtualModuleID from "../VirtualModuleID";
export default async function reloadGitData(gitWrapper, server) {
    await gitWrapper.refreshData();
    const gitDataModule = server.moduleGraph.getModuleById("\0" + VirtualModuleID.GitData);
    if (!gitDataModule) {
        throw new Error("Expected a GitData module.");
    }
    server.moduleGraph.invalidateModule(gitDataModule);
}
//# sourceMappingURL=reloadGitData.js.map