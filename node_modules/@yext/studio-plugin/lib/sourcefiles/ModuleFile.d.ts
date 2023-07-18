import { ModuleMetadata } from "../types/ModuleMetadata";
import { Project } from "ts-morph";
import { GetFileMetadata } from "../parsers/ComponentTreeParser";
/**
 * ModuleFile is responsible for parsing and updating a single
 * module file, for example `src/modules/Card.tsx`.
 */
export default class ModuleFile {
    private studioSourceFileParser;
    private fileMetadataParser;
    private reactComponentFileWriter;
    private componentTreeParser;
    constructor(filepath: string, getFileMetadata: GetFileMetadata, project: Project);
    getModuleMetadata(): import("true-myth").Result<ModuleMetadata, import("../errors/ParsingError").ParsingError>;
    private _getModuleMetadata;
    /**
     * Update module file by mutating the source file based on
     * the module's updated moduleMetadata.
     *
     * @param moduleMetadata - the updated moduleMetadata for module file
     * @param moduleDependencies - the filepaths of any depended upon modules
     */
    updateModuleFile(moduleMetadata: ModuleMetadata, moduleDependencies?: string[]): void;
    private static calcPropArgs;
}
//# sourceMappingURL=ModuleFile.d.ts.map