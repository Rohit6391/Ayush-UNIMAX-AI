"use client";
import { TextGenerator } from "./TextGenerator";

export function ConversionFunnelOptimizer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a conversion funnel to optimize it."
            buttonText="Generate Optimized Funnel"
            generatePrompt={(prompt) => `Optimize a conversion funnel: "${prompt}"`}
            resultTitle="Generated Optimized Funnel"
        />
    );
}
