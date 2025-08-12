"use client";
import { TextGenerator } from "./TextGenerator";

export function OutfitCombinationRecommender({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe your style to get outfit recommendations."
            buttonText="Generate Outfit Recommendations"
            generatePrompt={(prompt) => `Get outfit recommendations: "${prompt}"`}
            resultTitle="Generated Outfit Recommendations"
        />
    );
}
