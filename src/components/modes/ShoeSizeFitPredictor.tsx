"use client";
import { TextGenerator } from "./TextGenerator";

export function ShoeSizeFitPredictor({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide foot measurements to predict shoe size."
            buttonText="Generate Shoe Size Prediction"
            generatePrompt={(prompt) => `Predict shoe size: "${prompt}"`}
            resultTitle="Generated Shoe Size Prediction"
        />
    );
}
