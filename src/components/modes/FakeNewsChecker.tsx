"use client";
import { TextGenerator } from "./TextGenerator";

export function FakeNewsChecker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Is the story about a new planet discovered in our solar system real?'"
            buttonText="Check for Fake News"
            generatePrompt={(prompt) => 
                `You are a fact-checker. Analyze the following news story or claim for signs of being fake news. Provide an assessment and explain your reasoning. Claim: "${prompt}"`
            }
            resultTitle="Fake News Analysis"
        />
    );
}
