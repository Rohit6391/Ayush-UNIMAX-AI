
"use client";
import { TextGenerator } from "./TextGenerator";

export function TroubleshootingFlowMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a problem to create a troubleshooting flow for."
            buttonText="Make Flow"
            generatePrompt={(p: string) => `Create a troubleshooting flow for: "${p}"`}
            resultTitle="Troubleshooting Flow"
        />
    );
}
