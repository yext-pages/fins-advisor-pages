import PropShapeParser from "../parsers/PropShapeParser";
import PropValuesParser from "../parsers/PropValuesParser";
import StudioSourceFileParser from "../parsers/StudioSourceFileParser";
import StudioSourceFileWriter from "../writers/StudioSourceFileWriter";
import { TypeGuards } from "../utils";
/**
 * SiteSettingsFile is responsible for parsing and updating
 * site settings file. Studio expects the site settings to
 * be defined as an object in the file's default export.
 */
export default class SiteSettingsFile {
    studioSourceFileParser;
    studioSourceFileWriter;
    propShapeParser;
    propValuesParser;
    constructor(filepath, project) {
        this.studioSourceFileParser = new StudioSourceFileParser(filepath, project);
        this.studioSourceFileWriter = new StudioSourceFileWriter(filepath, project);
        this.propValuesParser = new PropValuesParser(this.studioSourceFileParser);
        this.propShapeParser = new PropShapeParser(this.studioSourceFileParser);
    }
    getSiteSettings() {
        const siteSettingsShape = this.propShapeParser.parseShape("SiteSettings");
        const values = this.propValuesParser.parsePropValues(siteSettingsShape);
        if (!values) {
            throw new Error("No default export found for site settings");
        }
        if (!TypeGuards.isSiteSettingsValues(values)) {
            const stringifiedValues = JSON.stringify(values, null, 2);
            throw new Error(`Improperly formatted SiteSettingsValues ${stringifiedValues}`);
        }
        if (!TypeGuards.isSiteSettingsShape(siteSettingsShape)) {
            const stringifiedValues = JSON.stringify(values, null, 2);
            throw new Error(`Improperly formatted SiteSettingsShape ${stringifiedValues}`);
        }
        return {
            shape: siteSettingsShape,
            values,
        };
    }
    /**
     * Update site settings file by mutating default export in the source file
     * based on the updated site settings' values.
     *
     * @param values - the updated site settings' values
     */
    updateSiteSettingValues(values) {
        const exportContent = this.studioSourceFileWriter.createPropsObjectLiteralWriter(values);
        this.studioSourceFileWriter.updateDefaultExport(exportContent);
        this.studioSourceFileWriter.writeToFile();
    }
}
//# sourceMappingURL=SiteSettingsFile.js.map