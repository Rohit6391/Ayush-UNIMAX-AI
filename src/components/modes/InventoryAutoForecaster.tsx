"use client";
import { TextGenerator } from "./TextGenerator";

export function InventoryAutoForecaster({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe your product and sales data to get an inventory forecast."
            buttonText="Generate Inventory Forecast"
            generatePrompt={(prompt) => `Create an inventory forecast: "${prompt}"`}
            resultTitle="Generated Inventory Forecast"
        />
    );
}
