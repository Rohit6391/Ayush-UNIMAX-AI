"use client";
import { TextGenerator } from "./TextGenerator";

export function CastingFitAnalyzer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a role to analyze casting fit."
            buttonText="Generate Casting Fit"
            generatePrompt={(prompt) => `Analyze casting fit: "${prompt}"`}
            resultTitle="Generated Casting Fit"
        />
    );
}
