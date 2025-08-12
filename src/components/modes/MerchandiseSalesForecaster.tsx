"use client";
import { TextGenerator } from "./TextGenerator";

export function MerchandiseSalesForecaster({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide sales data to forecast merchandise sales."
            buttonText="Generate Merchandise Sales Forecast"
            generatePrompt={(prompt) => `Forecast merchandise sales: "${prompt}"`}
            resultTitle="Generated Merchandise Sales Forecast"
        />
    );
}
