"use client";
import { TextGenerator } from "./TextGenerator";

export function CustomerServiceResponseAnalyzer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Upload customer service responses to analyze them."
            buttonText="Generate Response Analysis"
            generatePrompt={(prompt) => `Analyze customer service responses: "${prompt}"`}
            resultTitle="Generated Response Analysis"
        />
    );
}
