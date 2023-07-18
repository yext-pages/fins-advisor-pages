import ParsingOrchestrator from "../ParsingOrchestrator";
import { FileMetadata, ModuleMetadata, PageState, SiteSettingsValues } from "../types";
import { Project } from "ts-morph";
/**
 * FileSystemWriter is a class for housing content modification logic
 * for Studio editable source files (e.g. SiteSettingsFile, ModuleFile and PageFile).
 */
export declare class FileSystemWriter {
    private orchestrator;
    private project;
    constructor(orchestrator: ParsingOrchestrator, project: Project);
    /**
     * Update the page file's content based on provided page state.
     *
     * @param pageName - Name of the page file to update
     * @param pageState - the updated state for the page file
     */
    writeToPageFile(pageName: string, pageState: PageState): void;
    /**
     * Update the module file's content based on provided module metadata.
     *
     * @param moduleMetadata - the updated metadata for the module file
     * @param moduleDependencies - the filepaths of any depended upon modules
     */
    writeToModuleFile(moduleMetadata: ModuleMetadata, moduleDependencies?: string[]): void;
    writeToSiteSettings(siteSettingsValues: SiteSettingsValues): void;
    /**
     * Deletes all files corresponding to FileMetadata that exist in the previous UUIDToFileMetadata
     * but not the updated UUIDToFileMetadata (i.e. FileMetadata that have been removed).
     */
    syncFileMetadata(updatedUUIDToFileMetadata: Record<string, FileMetadata>): void;
    static openFile(filepath: string): void;
    removeFile(filepath: string): void;
}
//# sourceMappingURL=FileSystemWriter.d.ts.map