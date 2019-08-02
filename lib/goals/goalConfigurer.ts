import { GoalConfigurer } from "@atomist/sdm-core";
import { HelloWorldGoals } from "./goals";

/**
 * Configure the SDM and add fulfillments or listeners to the created goals
 */
export const HelloWorldGoalConfigurer: GoalConfigurer<HelloWorldGoals> = async (sdm, goals) => {

    // This is a good place to configure your SDM instance and goals with additional listeners or
    // fulfillments

    goals.helloWorld.with({
        name: "hello-world",
        goalExecutor: async gi => {
            const { progressLog, addressChannels } = gi;

            progressLog.write("Sending 'hello world' to all linked channels");
            await addressChannels("Hello world");
        },
    });

};
