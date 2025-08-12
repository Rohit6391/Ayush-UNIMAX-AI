"use client";
import { TextGenerator } from "./TextGenerator";

export function CropYieldForecaster({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide farm data to forecast crop yields."
            buttonText="Generate Crop Yield Forecast"
            generatePrompt={(prompt) => `Forecast crop yields: "${prompt}"`}
            resultTitle="Generated Crop Yield Forecast"
        />
    );
}
