"use client";
import { TextGenerator } from "./TextGenerator";

export function LoyaltyProgramImpactAnalyzer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a loyalty program to analyze its impact."
            buttonText="Generate Loyalty Program Impact"
            generatePrompt={(prompt) => `Analyze loyalty program impact: "${prompt}"`}
            resultTitle="Generated Loyalty Program Impact"
        />
    );
}
