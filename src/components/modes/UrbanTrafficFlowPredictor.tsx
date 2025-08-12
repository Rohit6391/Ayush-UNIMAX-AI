"use client";
import { TextGenerator } from "./TextGenerator";

export function UrbanTrafficFlowPredictor({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide location data to predict urban traffic flow."
            buttonText="Generate Traffic Prediction"
            generatePrompt={(prompt) => `Predict urban traffic flow: "${prompt}"`}
            resultTitle="Generated Traffic Prediction"
        />
    );
}
