"use client";
import { TextGenerator } from "./TextGenerator";

export function SupplyShortageForecaster({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide supply chain data to forecast shortages."
            buttonText="Generate Shortage Forecast"
            generatePrompt={(prompt) => `Forecast supply shortages: "${prompt}"`}
            resultTitle="Generated Shortage Forecast"
        />
    );
}
