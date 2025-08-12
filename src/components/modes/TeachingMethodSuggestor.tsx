"use client";
import { TextGenerator } from "./TextGenerator";

export function TeachingMethodSuggestor({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a subject to get teaching method suggestions."
            buttonText="Generate Teaching Methods"
            generatePrompt={(prompt) => `Suggest teaching methods: "${prompt}"`}
            resultTitle="Generated Teaching Methods"
        />
    );
}
