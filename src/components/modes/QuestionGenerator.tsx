"use client";
import { TextUtilities } from "./TextUtilities";

export function QuestionGenerator({ mode }: { mode: any }) {
    return (
        <TextUtilities
            mode={mode}
            promptPlaceholder="Enter a topic to generate questions about."
            buttonText="Generate Questions"
            generatePrompt={(prompt) => `Generate 3 thought-provoking questions about: "${prompt}"`}
            resultTitle="Questions"
        />
    );
}
