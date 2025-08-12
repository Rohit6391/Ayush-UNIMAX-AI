"use client";
import { TextGenerator } from "./TextGenerator";

export function UpsellRecommendationEngine({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide customer data to get upsell recommendations."
            buttonText="Generate Upsell Recommendations"
            generatePrompt={(prompt) => `Get upsell recommendations: "${prompt}"`}
            resultTitle="Generated Upsell Recommendations"
        />
    );
}
