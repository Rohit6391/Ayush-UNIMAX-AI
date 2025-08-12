"use client";
import { TextGenerator } from "./TextGenerator";

export function ReputationScoreTracker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide data to track your reputation score."
            buttonText="Generate Reputation Score"
            generatePrompt={(prompt) => `Track a reputation score: "${prompt}"`}
            resultTitle="Generated Reputation Score"
        />
    );
}
