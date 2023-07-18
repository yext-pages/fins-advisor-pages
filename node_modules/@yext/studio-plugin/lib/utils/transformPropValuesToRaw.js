import { PropValueType } from "../types";
/**
 * Given a PropValues object, parse the object into its raw values.
 */
export default function transformPropValuesToRaw(values) {
    const transformedValues = {};
    Object.keys(values).forEach((key) => {
        const { value, valueType } = values[key];
        if (valueType === PropValueType.Object) {
            transformedValues[key] = transformPropValuesToRaw(value);
        }
        else {
            transformedValues[key] = value;
        }
    });
    return transformedValues;
}
//# sourceMappingURL=transformPropValuesToRaw.js.map