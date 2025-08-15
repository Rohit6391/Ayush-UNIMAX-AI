"use client";
import { TextGenerator } from "./TextGenerator";

export function FactFinder({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'the capital of Australia' or 'the speed of light'"
            buttonText="Find Fact"
            generatePrompt={(prompt) => 
                `You are a research assistant. Provide a quick, accurate, and concise factual answer to the following question. Question: "${prompt}"`
            }
            resultTitle="Fact"
        />
    );
}
