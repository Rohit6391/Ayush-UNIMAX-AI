"use client";
import { TextGenerator } from "./TextGenerator";

export function VisualAidSuggestor({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe your presentation to get visual aid suggestions."
            buttonText="Generate Visual Aid Suggestions"
            generatePrompt={(prompt) => `Get visual aid suggestions: "${prompt}"`}
            resultTitle="Generated Visual Aid Suggestions"
        />
    );
}
