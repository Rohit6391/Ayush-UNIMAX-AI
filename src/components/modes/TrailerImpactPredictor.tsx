"use client";
import { TextGenerator } from "./TextGenerator";

export function TrailerImpactPredictor({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a trailer to predict its impact."
            buttonText="Generate Trailer Impact"
            generatePrompt={(prompt) => `Predict trailer impact: "${prompt}"`}
            resultTitle="Generated Trailer Impact"
        />
    );
}
