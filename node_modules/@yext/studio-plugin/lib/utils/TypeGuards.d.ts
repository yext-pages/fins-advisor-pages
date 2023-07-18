import { JsxElement, JsxFragment, JsxSelfClosingElement } from "ts-morph";
import { ComponentState, EditableComponentState, FileMetadata, ModuleMetadata, ModuleState, PropShape, PropType, PropVal, PropValueKind, PropValues, PropValueType, RepeaterState, SiteSettingsShape, SiteSettingsValues, StandardOrModuleComponentState } from "../types";
import { SiteSettingsExpression, StreamsDataExpression, TemplateStringExpression } from "../types/Expression";
type PrimitivePropValueType = PropValueType.number | PropValueType.string | PropValueType.boolean;
/**
 * A static class for housing various typeguards used by Studio.
 */
export default class TypeGuards {
    static assertIsValidPropVal(propVal: {
        kind: PropValueKind;
        valueType: PropValueType;
        value: unknown;
    }): asserts propVal is PropVal;
    static isValidPropVal: (propVal: {
        kind: PropValueKind;
        valueType: PropValueType;
        value: unknown;
    }) => propVal is PropVal;
    /** Checks that the value of a prop matches the prop type. */
    static valueMatchesPropType: (propType: PropType, value: unknown) => value is string | number | boolean | unknown[] | Record<string, unknown>;
    static isPrimitiveProp(propValueType: string): propValueType is PrimitivePropValueType;
    static isPropValueType(type: string): type is PropValueType;
    static isTemplateString(value: unknown): value is TemplateStringExpression;
    static isStreamsDataExpression(value: unknown): value is StreamsDataExpression;
    static isSiteSettingsExpression(value: unknown): value is SiteSettingsExpression;
    static isNotFragmentElement(element: JsxElement | JsxSelfClosingElement | JsxFragment): element is JsxElement | JsxSelfClosingElement;
    static isModuleMetadata(metadata?: FileMetadata | null): metadata is ModuleMetadata;
    static isModuleState(componentState: ComponentState): componentState is ModuleState;
    static isStandardOrModuleComponentState(componentState: ComponentState): componentState is StandardOrModuleComponentState;
    static isRepeaterState(componentState: ComponentState): componentState is RepeaterState;
    static isEditableComponentState(componentState: ComponentState): componentState is EditableComponentState;
    static isSiteSettingsValues(propValues: PropValues): propValues is SiteSettingsValues;
    static isSiteSettingsShape(propShape: PropShape): propShape is SiteSettingsShape;
    static canAcceptChildren(state?: ComponentState, metadata?: FileMetadata): boolean;
}
export {};
//# sourceMappingURL=TypeGuards.d.ts.map