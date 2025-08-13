"use client";
import { TextGenerator } from "./TextGenerator";

export function SurgicalProcedurePlanner({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a surgical case to plan the procedure."
            buttonText="Generate Surgical Plan"
            generatePrompt={(prompt) => `Plan a surgical procedure: "${prompt}"`}
            resultTitle="Generated Surgical Plan"
        />
    );
}
