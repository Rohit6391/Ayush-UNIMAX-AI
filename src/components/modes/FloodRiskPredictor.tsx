"use client";
import { TextGenerator } from "./TextGenerator";

export function FloodRiskPredictor({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide location data to predict flood risk."
            buttonText="Generate Flood Risk Prediction"
            generatePrompt={(prompt) => `Predict flood risk: "${prompt}"`}
            resultTitle="Generated Flood Risk Prediction"
        />
    );
}
