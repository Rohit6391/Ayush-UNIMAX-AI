"use client";
import { TextGenerator } from "./TextGenerator";

export function SeasonalDemandForecaster({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a product to forecast its seasonal demand."
            buttonText="Generate Seasonal Demand Forecast"
            generatePrompt={(prompt) => `Forecast seasonal demand: "${prompt}"`}
            resultTitle="Generated Seasonal Demand Forecast"
        />
    );
}
