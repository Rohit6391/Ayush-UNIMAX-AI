"use client";
import { TextGenerator } from "./TextGenerator";

export function ViralContentPredictor({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe content to predict its viral potential."
            buttonText="Generate Viral Prediction"
            generatePrompt={(prompt) => `Predict viral content: "${prompt}"`}
            resultTitle="Generated Viral Prediction"
        />
    );
}
