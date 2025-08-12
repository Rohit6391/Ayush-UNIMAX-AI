"use client";
import { TextGenerator } from "./TextGenerator";

export function GrammarPracticeCreator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Choose a grammar topic to get practice exercises."
            buttonText="Generate Grammar Practice"
            generatePrompt={(prompt) => `Create grammar practice: "${prompt}"`}
            resultTitle="Generated Grammar Practice"
        />
    );
}
