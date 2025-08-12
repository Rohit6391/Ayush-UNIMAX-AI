"use client";
import { TextGenerator } from "./TextGenerator";

export function PlagiarismRiskChecker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Upload text to check for plagiarism risks."
            buttonText="Generate Plagiarism Check"
            generatePrompt={(prompt) => `Check for plagiarism: "${prompt}"`}
            resultTitle="Generated Plagiarism Check"
        />
    );
}
