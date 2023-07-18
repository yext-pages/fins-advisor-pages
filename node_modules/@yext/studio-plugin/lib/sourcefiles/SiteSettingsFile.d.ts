import { Project } from "ts-morph";
import { SiteSettings, SiteSettingsValues } from "../types/SiteSettings";
/**
 * SiteSettingsFile is responsible for parsing and updating
 * site settings file. Studio expects the site settings to
 * be defined as an object in the file's default export.
 */
export default class SiteSettingsFile {
    private studioSourceFileParser;
    private studioSourceFileWriter;
    private propShapeParser;
    private propValuesParser;
    constructor(filepath: string, project: Project);
    getSiteSettings(): SiteSettings;
    /**
     * Update site settings file by mutating default export in the source file
     * based on the updated site settings' values.
     *
     * @param values - the updated site settings' values
     */
    updateSiteSettingValues(values: SiteSettingsValues): void;
}
//# sourceMappingURL=SiteSettingsFile.d.ts.map