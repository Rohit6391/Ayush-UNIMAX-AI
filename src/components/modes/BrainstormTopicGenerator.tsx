"use client";
import { TextGenerator } from "./TextGenerator";

export function BrainstormTopicGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Enter a general theme for brainstorming."
            buttonText="Generate Topics"
            generatePrompt={(p: string) => `Generate brainstorming topics for: "${p}"`}
            resultTitle="Brainstorming Topics"
        />
    );
}
