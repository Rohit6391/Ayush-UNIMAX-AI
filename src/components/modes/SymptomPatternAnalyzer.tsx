"use client";
import { TextGenerator } from "./TextGenerator";

export function SymptomPatternAnalyzer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="List symptoms to analyze patterns."
            buttonText="Generate Symptom Analysis"
            generatePrompt={(prompt) => `Analyze symptom patterns: "${prompt}"`}
            resultTitle="Generated Symptom Analysis"
        />
    );
}
