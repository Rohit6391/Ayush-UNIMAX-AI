"use client";
import { TextGenerator } from "./TextGenerator";

export function GreenhouseClimateController({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe your greenhouse to get a climate control plan."
            buttonText="Generate Greenhouse Climate Control"
            generatePrompt={(prompt) => `Control a greenhouse climate: "${prompt}"`}
            resultTitle="Generated Greenhouse Climate Control"
        />
    );
}
