"use client";
import { TextGenerator } from "./TextGenerator";

export function GradingConsistencyChecker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide grading data to check for consistency."
            buttonText="Generate Grading Consistency"
            generatePrompt={(prompt) => `Check grading consistency: "${prompt}"`}
            resultTitle="Generated Grading Consistency"
        />
    );
}
