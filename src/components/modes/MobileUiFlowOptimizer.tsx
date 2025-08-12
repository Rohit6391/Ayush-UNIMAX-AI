"use client";
import { TextGenerator } from "./TextGenerator";

export function MobileUiFlowOptimizer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a mobile UI flow to optimize it."
            buttonText="Generate Optimized UI Flow"
            generatePrompt={(prompt) => `Optimize a mobile UI flow: "${prompt}"`}
            resultTitle="Generated Optimized UI Flow"
        />
    );
}
