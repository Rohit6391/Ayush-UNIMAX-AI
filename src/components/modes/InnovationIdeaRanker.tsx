"use client";
import { TextGenerator } from "./TextGenerator";

export function InnovationIdeaRanker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="List your ideas to rank them."
            buttonText="Generate Innovation Ideas"
            generatePrompt={(prompt) => `Rank innovation ideas: "${prompt}"`}
            resultTitle="Generated Innovation Ideas"
        />
    );
}
