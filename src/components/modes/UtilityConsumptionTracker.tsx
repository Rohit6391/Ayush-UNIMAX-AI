"use client";
import { TextGenerator } from "./TextGenerator";

export function UtilityConsumptionTracker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide utility data to track and analyze consumption."
            buttonText="Generate Utility Consumption Analysis"
            generatePrompt={(prompt) => `Track utility consumption: "${prompt}"`}
            resultTitle="Generated Utility Consumption Analysis"
        />
    );
}
