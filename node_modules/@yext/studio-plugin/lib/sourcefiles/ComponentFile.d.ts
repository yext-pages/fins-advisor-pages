import { ComponentMetadata } from "../types/ComponentMetadata";
import { Project } from "ts-morph";
import { ParsingError } from "../errors/ParsingError";
import { Result } from "true-myth";
/**
 * ComponentFile is responsible for parsing a single component file, for example
 * `src/components/Banner.tsx`.
 */
export default class ComponentFile {
    private studioSourceFileParser;
    private fileMetadataParser;
    constructor(filepath: string, project: Project);
    getComponentMetadata(): Result<ComponentMetadata, ParsingError>;
    private _getComponentMetadata;
}
//# sourceMappingURL=ComponentFile.d.ts.map