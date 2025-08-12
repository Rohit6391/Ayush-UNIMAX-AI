"use client";
import { TextGenerator } from "./TextGenerator";

export function HealthRiskAssessmentAi({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide health data to assess risks."
            buttonText="Generate Health Risk Assessment"
            generatePrompt={(prompt) => `Assess health risks: "${prompt}"`}
            resultTitle="Generated Health Risk Assessment"
        />
    );
}
