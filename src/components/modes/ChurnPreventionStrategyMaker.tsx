"use client";
import { TextGenerator } from "./TextGenerator";

export function ChurnPreventionStrategyMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe your business to create churn prevention strategies."
            buttonText="Generate Churn Prevention Strategy"
            generatePrompt={(prompt) => `Create a churn prevention strategy: "${prompt}"`}
            resultTitle="Generated Churn Prevention Strategy"
        />
    );
}
