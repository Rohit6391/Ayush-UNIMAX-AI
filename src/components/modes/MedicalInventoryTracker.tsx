"use client";
import { TextGenerator } from "./TextGenerator";

export function MedicalInventoryTracker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide inventory data to track and manage."
            buttonText="Generate Inventory Management"
            generatePrompt={(prompt) => `Track medical inventory: "${prompt}"`}
            resultTitle="Generated Inventory Management"
        />
    );
}
