"use client";
import { TextGenerator } from "./TextGenerator";

export function TrendForecastEngine({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide data to forecast trends."
            buttonText="Generate Trend Forecast"
            generatePrompt={(prompt) => `Forecast trends: "${prompt}"`}
            resultTitle="Generated Trend Forecast"
        />
    );
}
