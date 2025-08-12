"use client";
import { TextGenerator } from "./TextGenerator";

export function AudienceEngagementPredictor({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe your event to predict audience engagement."
            buttonText="Generate Engagement Prediction"
            generatePrompt={(prompt) => `Predict audience engagement: "${prompt}"`}
            resultTitle="Generated Engagement Prediction"
        />
    );
}
