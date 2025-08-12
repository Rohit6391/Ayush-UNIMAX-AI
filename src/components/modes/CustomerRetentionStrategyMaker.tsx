"use client";
import { TextGenerator } from "./TextGenerator";

export function CustomerRetentionStrategyMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe your business to create customer retention strategies."
            buttonText="Generate Retention Strategy"
            generatePrompt={(prompt) => `Create a customer retention strategy: "${prompt}"`}
            resultTitle="Generated Retention Strategy"
        />
    );
}
