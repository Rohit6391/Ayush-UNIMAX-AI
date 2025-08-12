"use client";
import { TextGenerator } from "./TextGenerator";

export function ClimateDataVisualizer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide climate data to visualize."
            buttonText="Generate Climate Data Visualization"
            generatePrompt={(prompt) => `Visualize climate data: "${prompt}"`}
            resultTitle="Generated Climate Data Visualization"
        />
    );
}
