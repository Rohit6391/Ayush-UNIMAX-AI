"use client";
import { TextGenerator } from "./TextGenerator";

export function WeatherImpactPredictor({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a system and location to predict weather impact."
            buttonText="Generate Weather Impact Prediction"
            generatePrompt={(prompt) => `Predict weather impact: "${prompt}"`}
            resultTitle="Generated Weather Impact Prediction"
        />
    );
}
