"use client";
import { TextGenerator } from "./TextGenerator";

export function LivestockHealthMonitor({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide livestock data to monitor their health."
            buttonText="Generate Livestock Health Monitoring"
            generatePrompt={(prompt) => `Monitor livestock health: "${prompt}"`}
            resultTitle="Generated Livestock Health Monitoring"
        />
    );
}
