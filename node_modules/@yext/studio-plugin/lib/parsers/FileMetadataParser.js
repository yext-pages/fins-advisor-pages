import PropValuesParser from "./PropValuesParser";
import PropShapeParser from "./PropShapeParser";
import { v4 } from "uuid";
import ComponentParamParser from "./ComponentParamParser";
/**
 * FileMetadataParser is a class for housing shared parsing logic for
 * files of type FileMetadata (e.g. Module or Component) within Studio.
 */
export default class FileMetadataParser {
    propValuesParser;
    propShapeParser;
    componentParamParser;
    constructor(studioSourceFileParser) {
        this.propValuesParser = new PropValuesParser(studioSourceFileParser);
        this.propShapeParser = new PropShapeParser(studioSourceFileParser);
        this.componentParamParser = new ComponentParamParser(studioSourceFileParser);
    }
    /**
     * Parses the propShape and initialProps used in FileMetadata.
     *
     * @param onProp - A function to execute when iterating through each field in the prop interface
     * @returns the propShape and initialProps
     */
    parse(onProp) {
        const propShape = this.parsePropShape(onProp);
        const initialProps = this.parseInitialProps(propShape);
        return {
            propShape,
            ...(initialProps && { initialProps }),
            metadataUUID: v4(),
        };
    }
    /**
     * Get initial props for a component, defined through a const variable "initialProps"
     * that match the interface `${componentName}Props`.
     *
     * @param propShape - Shape of the component's props
     * @returns field values for "initialProps" variable in file
     */
    parseInitialProps(propShape) {
        return this.propValuesParser.parsePropValues(propShape, "initialProps");
    }
    /**
     * Get shape of the component's props, defined through an interface `${componentName}Props`.
     *
     * @param onProp - A function to execute when iterating through each field in the prop interface
     * @returns shape of the component's props
     */
    parsePropShape(onProp) {
        const interfaceName = this.componentParamParser.parseParamName();
        if (interfaceName === undefined) {
            return {};
        }
        return this.propShapeParser.parseShape(interfaceName, onProp);
    }
}
//# sourceMappingURL=FileMetadataParser.js.map