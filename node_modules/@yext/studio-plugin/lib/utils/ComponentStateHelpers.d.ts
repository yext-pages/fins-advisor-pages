import { ComponentState, ErrorComponentState, RepeaterState } from "../types";
/**
 * A static class for housing various util functions related to the component
 * state used by Studio.
 */
export default class ComponentStateHelpers {
    static extractRepeatedState<T extends Exclude<ComponentState, RepeaterState>>(c: T | RepeaterState): T | ErrorComponentState;
}
//# sourceMappingURL=ComponentStateHelpers.d.ts.map