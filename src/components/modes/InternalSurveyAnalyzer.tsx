"use client";
import { TextGenerator } from "./TextGenerator";

export function InternalSurveyAnalyzer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Upload survey data to analyze it."
            buttonText="Generate Survey Analysis"
            generatePrompt={(prompt) => `Analyze internal survey data: "${prompt}"`}
            resultTitle="Generated Survey Analysis"
        />
    );
}
