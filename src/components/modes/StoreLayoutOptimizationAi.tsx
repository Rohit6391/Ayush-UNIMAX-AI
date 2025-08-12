"use client";
import { TextGenerator } from "./TextGenerator";

export function StoreLayoutOptimizationAi({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe your store to get an optimized layout."
            buttonText="Generate Optimized Store Layout"
            generatePrompt={(prompt) => `Optimize a store layout: "${prompt}"`}
            resultTitle="Generated Optimized Store Layout"
        />
    );
}
