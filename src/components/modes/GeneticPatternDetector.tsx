"use client";
import { TextGenerator } from "./TextGenerator";

export function GeneticPatternDetector({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide genetic data to detect patterns."
            buttonText="Generate Genetic Pattern Analysis"
            generatePrompt={(prompt) => `Detect genetic patterns: "${prompt}"`}
            resultTitle="Generated Genetic Pattern Analysis"
        />
    );
}
