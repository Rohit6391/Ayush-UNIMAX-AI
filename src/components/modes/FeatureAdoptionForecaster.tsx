"use client";
import { TextGenerator } from "./TextGenerator";

export function FeatureAdoptionForecaster({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a new feature to forecast its adoption."
            buttonText="Generate Feature Adoption Forecast"
            generatePrompt={(prompt) => `Forecast feature adoption: "${prompt}"`}
            resultTitle="Generated Feature Adoption Forecast"
        />
    );
}
