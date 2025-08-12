"use client";
import { TextGenerator } from "./TextGenerator";

export function ProductionSchedulingPlanner({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe your production needs to get a schedule."
            buttonText="Generate Production Schedule"
            generatePrompt={(prompt) => `Plan a production schedule: "${prompt}"`}
            resultTitle="Generated Production Schedule"
        />
    );
}
