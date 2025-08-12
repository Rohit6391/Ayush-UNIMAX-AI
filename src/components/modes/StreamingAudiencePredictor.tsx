"use client";
import { TextGenerator } from "./TextGenerator";

export function StreamingAudiencePredictor({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a streaming event to predict its audience."
            buttonText="Generate Streaming Audience Prediction"
            generatePrompt={(prompt) => `Predict a streaming audience: "${prompt}"`}
            resultTitle="Generated Streaming Audience Prediction"
        />
    );
}
