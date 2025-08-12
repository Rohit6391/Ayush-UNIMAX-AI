"use client";
import { TextGenerator } from "./TextGenerator";

export function SoilNutrientAnalyzer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide soil data to analyze nutrient content."
            buttonText="Generate Soil Nutrient Analysis"
            generatePrompt={(prompt) => `Analyze soil nutrients: "${prompt}"`}
            resultTitle="Generated Soil Nutrient Analysis"
        />
    );
}
