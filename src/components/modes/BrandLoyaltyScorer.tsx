"use client";
import { TextGenerator } from "./TextGenerator";

export function BrandLoyaltyScorer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide customer data to score brand loyalty."
            buttonText="Generate Brand Loyalty Score"
            generatePrompt={(prompt) => `Score brand loyalty: "${prompt}"`}
            resultTitle="Generated Brand Loyalty Score"
        />
    );
}
