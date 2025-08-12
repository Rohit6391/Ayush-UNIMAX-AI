"use client";
import { TextGenerator } from "./TextGenerator";

export function LoyaltyRewardPlanner({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe your business to plan a loyalty reward program."
            buttonText="Generate Loyalty Program Plan"
            generatePrompt={(prompt) => `Plan a loyalty program: "${prompt}"`}
            resultTitle="Generated Loyalty Program Plan"
        />
    );
}
