"use client";
import { TextGenerator } from "./TextGenerator";

export function LifetimeValueForecastingAi({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide customer data to forecast their lifetime value."
            buttonText="Generate Lifetime Value Forecast"
            generatePrompt={(prompt) => `Forecast customer lifetime value: "${prompt}"`}
            resultTitle="Generated Lifetime Value Forecast"
        />
    );
}
