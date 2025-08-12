"use client";
import { TextGenerator } from "./TextGenerator";

export function ProductLifecycleForecaster({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a product to forecast its lifecycle."
            buttonText="Generate Product Lifecycle Forecast"
            generatePrompt={(prompt) => `Forecast a product lifecycle: "${prompt}"`}
            resultTitle="Generated Product Lifecycle Forecast"
        />
    );
}
