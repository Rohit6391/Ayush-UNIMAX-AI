"use client";
import { TextGenerator } from "./TextGenerator";

export function TrainingNeedsIdentifier({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a team to identify their training needs."
            buttonText="Generate Training Needs"
            generatePrompt={(prompt) => `Identify training needs: "${prompt}"`}
            resultTitle="Generated Training Needs"
        />
    );
}
