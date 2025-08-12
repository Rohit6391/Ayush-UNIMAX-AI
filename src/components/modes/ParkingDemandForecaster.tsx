"use client";
import { TextGenerator } from "./TextGenerator";

export function ParkingDemandForecaster({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide data to forecast parking demand."
            buttonText="Generate Parking Demand Forecast"
            generatePrompt={(prompt) => `Forecast parking demand: "${prompt}"`}
            resultTitle="Generated Parking Demand Forecast"
        />
    );
}
