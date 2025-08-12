"use client";
import { TextGenerator } from "./TextGenerator";

export function LightingSetupOptimizer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a scene to optimize the lighting setup."
            buttonText="Generate Lighting Setup"
            generatePrompt={(prompt) => `Optimize a lighting setup: "${prompt}"`}
            resultTitle="Generated Lighting Setup"
        />
    );
}
