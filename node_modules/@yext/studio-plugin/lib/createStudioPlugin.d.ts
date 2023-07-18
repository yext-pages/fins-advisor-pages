import { ConfigEnv, Plugin } from "vite";
/**
 * Handles server-client communication.
 *
 * This includes providing a vite virtual module so that server side data can be passed to the front end
 * for the initial load, and messaging using the vite HMR API.
 */
export default function createStudioPlugin(args: ConfigEnv): Promise<Plugin>;
//# sourceMappingURL=createStudioPlugin.d.ts.map