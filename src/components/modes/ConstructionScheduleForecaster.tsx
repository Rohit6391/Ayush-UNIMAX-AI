"use client";
import { TextGenerator } from "./TextGenerator";

export function ConstructionScheduleForecaster({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide project data to forecast the construction schedule."
            buttonText="Generate Construction Schedule Forecast"
            generatePrompt={(prompt) => `Forecast a construction schedule: "${prompt}"`}
            resultTitle="Generated Construction Schedule Forecast"
        />
    );
}
