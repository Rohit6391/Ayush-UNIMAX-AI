"use client";
import { TextGenerator } from "./TextGenerator";

export function PestInfestationPredictor({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide data to predict pest infestations."
            buttonText="Generate Pest Infestation Prediction"
            generatePrompt={(prompt) => `Predict pest infestations: "${prompt}"`}
            resultTitle="Generated Pest Infestation Prediction"
        />
    );
}
