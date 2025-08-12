"use client";
import { TextGenerator } from "./TextGenerator";

export function TreatmentPlanPersonalizer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide patient data to personalize a treatment plan."
            buttonText="Generate Personalized Plan"
            generatePrompt={(prompt) => `Personalize a treatment plan: "${prompt}"`}
            resultTitle="Generated Personalized Plan"
        />
    );
}
