"use client";
import { TextGenerator } from "./TextGenerator";

export function DiseaseOutbreakPredictor({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide data to predict a disease outbreak."
            buttonText="Generate Outbreak Prediction"
            generatePrompt={(prompt) => `Predict a disease outbreak: "${prompt}"`}
            resultTitle="Generated Outbreak Prediction"
        />
    );
}
