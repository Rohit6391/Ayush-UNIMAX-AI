"use client";
import { TextGenerator } from "./TextGenerator";

export function ResolutionTimeForecaster({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide support ticket data to forecast resolution times."
            buttonText="Generate Resolution Time"
            generatePrompt={(prompt) => `Forecast resolution time: "${prompt}"`}
            resultTitle="Generated Resolution Time"
        />
    );
}
