"use client";
import { TextGenerator } from "./TextGenerator";

export function CareerPathPredictor({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide your profile to predict your career path."
            buttonText="Generate Career Path"
            generatePrompt={(prompt) => `Predict a career path: "${prompt}"`}
            resultTitle="Generated Career Path"
        />
    );
}
