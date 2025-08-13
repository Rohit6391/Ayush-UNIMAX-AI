"use client";
import { TextGenerator } from "./TextGenerator";

export function MentalWellnessSuggestionBot({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe your mood to get mental wellness suggestions."
            buttonText="Generate Wellness Suggestions"
            generatePrompt={(prompt) => `Get mental wellness suggestions: "${prompt}"`}
            resultTitle="Generated Wellness Suggestions"
        />
    );
}
