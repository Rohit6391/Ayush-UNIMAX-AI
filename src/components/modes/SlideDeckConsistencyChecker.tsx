"use client";
import { TextGenerator } from "./TextGenerator";

export function SlideDeckConsistencyChecker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Upload a slide deck to check for consistency."
            buttonText="Generate Slide Deck Consistency"
            generatePrompt={(prompt) => `Check slide deck consistency: "${prompt}"`}
            resultTitle="Generated Slide Deck Consistency"
        />
    );
}
