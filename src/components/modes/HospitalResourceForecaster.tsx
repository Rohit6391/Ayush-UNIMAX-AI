"use client";
import { TextGenerator } from "./TextGenerator";

export function HospitalResourceForecaster({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide data to forecast hospital resource needs."
            buttonText="Generate Resource Forecast"
            generatePrompt={(prompt) => `Forecast hospital resources: "${prompt}"`}
            resultTitle="Generated Resource Forecast"
        />
    );
}
