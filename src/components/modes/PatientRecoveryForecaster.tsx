"use client";
import { TextGenerator } from "./TextGenerator";

export function PatientRecoveryForecaster({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide patient data to forecast recovery."
            buttonText="Generate Recovery Forecast"
            generatePrompt={(prompt) => `Forecast patient recovery: "${prompt}"`}
            resultTitle="Generated Recovery Forecast"
        />
    );
}
