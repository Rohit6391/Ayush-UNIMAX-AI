"use client";
import { TextGenerator } from "./TextGenerator";

export function InfluenceNetworkMapper({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide a topic to map the influence network."
            buttonText="Generate Influence Network Map"
            generatePrompt={(prompt) => `Map an influence network: "${prompt}"`}
            resultTitle="Generated Influence Network Map"
        />
    );
}
