import { Project } from "ts-morph";
import { Result } from "true-myth";
import { PageState } from "../types";
import { GetFileMetadata } from "../parsers/ComponentTreeParser";
import { ParsingError } from "../errors/ParsingError";
/**
 * PageFile is responsible for parsing and updating a single
 * page file, for example `src/templates/index.tsx`.
 */
export default class PageFile {
    private isPagesJSRepo;
    private studioSourceFileParser;
    private pagesJsStateParser;
    private getPathWriter;
    private templateConfigWriter;
    private reactComponentFileWriter;
    private componentTreeParser;
    constructor(filepath: string, getFileMetadata: GetFileMetadata, project: Project, isPagesJSRepo: boolean, entityFiles?: string[]);
    getPageState(): Result<PageState, ParsingError>;
    private _getPageState;
    /**
     * Update page file by mutating the source file based on the page's updated
     * state. Additionally, for an entity page, the "config" variable in the
     * source file will be mutated to update the template configuration.
     *
     * @param updatedPageState - the updated state for the page file
     */
    updatePageFile(updatedPageState: PageState): void;
}
//# sourceMappingURL=PageFile.d.ts.map