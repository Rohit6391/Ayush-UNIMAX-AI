"use client";
import { TextGenerator } from "./TextGenerator";

export function OceanCurrentPredictor({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide location and date to predict ocean currents."
            buttonText="Generate Ocean Current Prediction"
            generatePrompt={(prompt) => `Predict ocean currents: "${prompt}"`}
            resultTitle="Generated Ocean Current Prediction"
        />
    );
}
