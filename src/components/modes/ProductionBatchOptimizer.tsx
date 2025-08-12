"use client";
import { TextGenerator } from "./TextGenerator";

export function ProductionBatchOptimizer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide production data to optimize batch sizes."
            buttonText="Generate Optimized Batch Size"
            generatePrompt={(prompt) => `Optimize production batch sizes: "${prompt}"`}
            resultTitle="Generated Optimized Batch Size"
        />
    );
}
