import { GoalWithFulfillment } from "@atomist/sdm";
import { AllGoals } from "@atomist/sdm-core";

/**
 * Interface to capture all goals that this SDM will manage
 */
export interface HelloWorldGoals extends AllGoals {

    /** Simple hello world goal */
    helloWorld: GoalWithFulfillment;

}
