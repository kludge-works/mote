/**
 * The main entry point into the SDM
 */
import { configure } from "@atomist/sdm/lib/core";
import { machineOptions } from "./lib/configure";
import { helloWorldCommand } from "./lib/commands/helloworld";

export const configuration = configure(async sdm => {
    sdm.addCommand(helloWorldCommand);
}, machineOptions);
