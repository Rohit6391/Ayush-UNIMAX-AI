
"use client";
import { TextGenerator } from "./TextGenerator";

export function TroubleshootingFlowMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a problem to create a troubleshooting flow for."
            buttonText="Make Flow"
            generatePrompt={(prompt) => `Create a troubleshooting flow for: "${prompt}"`}
            resultTitle="Troubleshooting Flow"
        />
    );
}

    