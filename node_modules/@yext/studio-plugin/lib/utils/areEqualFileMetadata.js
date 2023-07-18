import lodash from "lodash";
/**
 * Returns whether the two given {@link FileMetadata} are equivalent.
 * `undefined` and unset values are considered equivalent.
 */
export default function areEqualFileMetadata(firstMetadata, secondMetadata) {
    return lodash.isEqual(removeUndefined(firstMetadata), removeUndefined(secondMetadata));
}
function removeUndefined(metadata) {
    return lodash.omitBy(metadata, (value) => value === undefined);
}
//# sourceMappingURL=areEqualFileMetadata.js.map