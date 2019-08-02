import { goal } from "@atomist/sdm";
import { GoalCreator } from "@atomist/sdm-core";
import { HelloWorldGoals } from "./goals";

/**
 * Create all goal instances and return an instance of HelloWorldGoals
 */
export const HelloWorldGoalCreator: GoalCreator<HelloWorldGoals> = async sdm => {

    // This is the place to create the goal instances and return them
    // as part of the goal interface

    return {
        helloWorld: goal({ displayName: "hello world" }),
    };
};
