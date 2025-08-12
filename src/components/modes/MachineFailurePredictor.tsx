"use client";
import { TextGenerator } from "./TextGenerator";

export function MachineFailurePredictor({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide machine data to predict failures."
            buttonText="Generate Failure Prediction"
            generatePrompt={(prompt) => `Predict machine failures: "${prompt}"`}
            resultTitle="Generated Failure Prediction"
        />
    );
}
