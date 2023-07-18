import TypeGuards from "./TypeGuards";
/**
 * A static class for housing various util functions related to the component
 * state used by Studio.
 */
export default class ComponentStateHelpers {
    static extractRepeatedState(c) {
        if (TypeGuards.isRepeaterState(c)) {
            const repeatedState = {
                ...c.repeatedComponent,
                uuid: c.uuid,
                parentUUID: c.parentUUID,
            };
            return repeatedState;
        }
        return c;
    }
}
//# sourceMappingURL=ComponentStateHelpers.js.map