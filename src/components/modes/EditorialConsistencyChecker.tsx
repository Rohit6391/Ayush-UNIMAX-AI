"use client";
import { TextGenerator } from "./TextGenerator";

export function EditorialConsistencyChecker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Upload content to check for editorial consistency."
            buttonText="Generate Editorial Consistency"
            generatePrompt={(prompt) => `Check editorial consistency: "${prompt}"`}
            resultTitle="Generated Editorial Consistency"
        />
    );
}
