"use client";
import { TextGenerator } from "./TextGenerator";

export function SeedSelectionOptimizer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide crop goals to get optimized seed selections."
            buttonText="Generate Seed Selection"
            generatePrompt={(prompt) => `Optimize seed selection: "${prompt}"`}
            resultTitle="Generated Seed Selection"
        />
    );
}
