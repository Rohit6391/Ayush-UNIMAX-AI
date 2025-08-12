"use client";
import { TextGenerator } from "./TextGenerator";

export function VocabularyExpansionTool({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Choose a topic to expand your vocabulary."
            buttonText="Generate Vocabulary Expansion"
            generatePrompt={(prompt) => `Expand your vocabulary: "${prompt}"`}
            resultTitle="Generated Vocabulary Expansion"
        />
    );
}
