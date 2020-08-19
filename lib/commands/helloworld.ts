import { CommandHandlerRegistration } from "@atomist/sdm";

const helloWorldParametersDefinition = {
    name: { description: "name", required: true, pattern: /.*/ },
    location: {},
};

export const helloWorldCommand: CommandHandlerRegistration<{
    name: string;
    location: string;
}> = {
    name: "HelloWorld",
    description: "Responds with a friendly greeting to everyone",
    intent: "hello",
    parameters: helloWorldParametersDefinition,
    listener: async ci => {
        return ci.addressChannels(`Welcome to ${ci.parameters?.location}, ${ci.parameters?.name}`);
    },
};
