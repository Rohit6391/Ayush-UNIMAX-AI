"use client";
import { TextGenerator } from "./TextGenerator";

export function FashionTrendPredictor({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide data to predict fashion trends."
            buttonText="Generate Fashion Trend Prediction"
            generatePrompt={(prompt) => `Predict fashion trends: "${prompt}"`}
            resultTitle="Generated Fashion Trend Prediction"
        />
    );
}
