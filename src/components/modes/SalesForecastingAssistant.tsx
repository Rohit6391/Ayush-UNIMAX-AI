"use client";
import { TextGenerator } from "./TextGenerator";

export function SalesForecastingAssistant({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide sales data to get a forecast."
            buttonText="Generate Sales Forecast"
            generatePrompt={(prompt) => `Get a sales forecast: "${prompt}"`}
            resultTitle="Generated Sales Forecast"
        />
    );
}
