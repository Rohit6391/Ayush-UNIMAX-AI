"use client";
import { TextGenerator } from "./TextGenerator";

export function TrialConversionRatePredictor({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide trial data to predict the conversion rate."
            buttonText="Generate Trial Conversion Prediction"
            generatePrompt={(prompt) => `Predict trial conversion rate: "${prompt}"`}
            resultTitle="Generated Trial Conversion Prediction"
        />
    );
}
