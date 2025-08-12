"use client";
import { TextGenerator } from "./TextGenerator";

export function AbTestResultAnalyzer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide A/B test data to analyze the results."
            buttonText="Generate A/B Test Results"
            generatePrompt={(prompt) => `Analyze A/B test results: "${prompt}"`}
            resultTitle="Generated A/B Test Results"
        />
    );
}
