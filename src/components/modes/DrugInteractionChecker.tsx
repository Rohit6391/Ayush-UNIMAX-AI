"use client";
import { TextGenerator } from "./TextGenerator";

export function DrugInteractionChecker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="List drugs to check for interactions."
            buttonText="Generate Drug Interaction Check"
            generatePrompt={(prompt) => `Check drug interactions: "${prompt}"`}
            resultTitle="Generated Drug Interaction Check"
        />
    );
}
