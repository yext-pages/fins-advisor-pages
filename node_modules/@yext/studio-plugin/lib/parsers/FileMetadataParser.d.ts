import StudioSourceFileParser from "./StudioSourceFileParser";
import { ValidFileMetadata } from "../types/FileMetadata";
/**
 * FileMetadataParser is a class for housing shared parsing logic for
 * files of type FileMetadata (e.g. Module or Component) within Studio.
 */
export default class FileMetadataParser {
    private propValuesParser;
    private propShapeParser;
    private componentParamParser;
    constructor(studioSourceFileParser: StudioSourceFileParser);
    /**
     * Parses the propShape and initialProps used in FileMetadata.
     *
     * @param onProp - A function to execute when iterating through each field in the prop interface
     * @returns the propShape and initialProps
     */
    parse(onProp?: (propName: string) => boolean): Pick<ValidFileMetadata, "initialProps" | "propShape" | "metadataUUID">;
    /**
     * Get initial props for a component, defined through a const variable "initialProps"
     * that match the interface `${componentName}Props`.
     *
     * @param propShape - Shape of the component's props
     * @returns field values for "initialProps" variable in file
     */
    private parseInitialProps;
    /**
     * Get shape of the component's props, defined through an interface `${componentName}Props`.
     *
     * @param onProp - A function to execute when iterating through each field in the prop interface
     * @returns shape of the component's props
     */
    private parsePropShape;
}
//# sourceMappingURL=FileMetadataParser.d.ts.map