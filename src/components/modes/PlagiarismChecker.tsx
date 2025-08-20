"use client";
import { TextUtilities } from "./TextUtilities";

export function PlagiarismChecker({ mode }: { mode: any }) {
    return (
        <TextUtilities
            mode={mode}
            promptPlaceholder="Paste text to check for potential plagiarism."
            buttonText="Check Plagiarism"
            generatePrompt={(prompt) => `Analyze the following text for uniqueness. This is a simulation and not a guarantee. Text: "${prompt}"`}
            resultTitle="Plagiarism Check"
        />
    );
}
