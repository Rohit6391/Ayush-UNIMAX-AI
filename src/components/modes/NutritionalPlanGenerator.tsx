"use client";
import { TextGenerator } from "./TextGenerator";

export function NutritionalPlanGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide your dietary needs to generate a nutritional plan."
            buttonText="Generate Nutritional Plan"
            generatePrompt={(prompt) => `Generate a nutritional plan: "${prompt}"`}
            resultTitle="Generated Nutritional Plan"
        />
    );
}
