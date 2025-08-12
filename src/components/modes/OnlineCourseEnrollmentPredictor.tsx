"use client";
import { TextGenerator } from "./TextGenerator";

export function OnlineCourseEnrollmentPredictor({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide course data to predict enrollment."
            buttonText="Generate Enrollment Prediction"
            generatePrompt={(prompt) => `Predict online course enrollment: "${prompt}"`}
            resultTitle="Generated Enrollment Prediction"
        />
    );
}
