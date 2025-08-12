"use client";
import { TextGenerator } from "./TextGenerator";

export function CarbonFootprintForecaster({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a project to forecast its carbon footprint."
            buttonText="Generate Carbon Footprint Forecast"
            generatePrompt={(prompt) => `Forecast a carbon footprint: "${prompt}"`}
            resultTitle="Generated Carbon Footprint Forecast"
        />
    );
}
