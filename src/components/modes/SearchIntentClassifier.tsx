"use client";
import { TextGenerator } from "./TextGenerator";

export function SearchIntentClassifier({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide a search query to classify its intent."
            buttonText="Generate Search Intent"
            generatePrompt={(prompt) => `Classify search intent: "${prompt}"`}
            resultTitle="Generated Search Intent"
        />
    );
}
