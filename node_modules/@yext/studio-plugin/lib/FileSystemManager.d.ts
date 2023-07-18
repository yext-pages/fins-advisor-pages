import { FileMetadata, PageState, SiteSettingsValues, UserPaths } from "./types";
import { FileSystemWriter } from "./writers/FileSystemWriter";
/**
 * Handles file removal and content update in user's repo
 * based on updated state from Studio's client side.
 */
export default class FileSystemManager {
    private paths;
    private writer;
    constructor(paths: UserPaths, writer: FileSystemWriter);
    removeFile(filepath: string): void;
    getUserPaths(): UserPaths;
    updatePageFile(filepath: string, pageState: PageState): void;
    updateSiteSettings(siteSettingsValues: SiteSettingsValues): void;
    syncFileMetadata(UUIDToFileMetadata: Record<string, FileMetadata>): void;
}
//# sourceMappingURL=FileSystemManager.d.ts.map