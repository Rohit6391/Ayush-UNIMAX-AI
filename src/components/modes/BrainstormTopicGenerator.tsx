
"use client";
import { TextGenerator } from "./TextGenerator";

export function BrainstormTopicGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Enter a general theme for brainstorming."
            buttonText="Generate Topics"
            generatePrompt={(prompt) => `Generate brainstorming topics for: "${prompt}"`}
            resultTitle="Brainstorming Topics"
        />
    );
}

    