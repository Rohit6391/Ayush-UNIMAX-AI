"use client";
import { TextGenerator } from "./TextGenerator";

export function FarmEquipmentUsageTracker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide equipment data to track and analyze usage."
            buttonText="Generate Equipment Usage Analysis"
            generatePrompt={(prompt) => `Track farm equipment usage: "${prompt}"`}
            resultTitle="Generated Equipment Usage Analysis"
        />
    );
}
