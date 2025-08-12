"use client";
import { TextGenerator } from "./TextGenerator";

export function PresentationFlowOptimizer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Upload a presentation to optimize its flow."
            buttonText="Generate Optimized Presentation Flow"
            generatePrompt={(prompt) => `Optimize a presentation flow: "${prompt}"`}
            resultTitle="Generated Optimized Presentation Flow"
        />
    );
}
