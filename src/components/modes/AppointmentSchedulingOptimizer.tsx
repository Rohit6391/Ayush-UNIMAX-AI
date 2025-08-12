"use client";
import { TextGenerator } from "./TextGenerator";

export function AppointmentSchedulingOptimizer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide appointment data to optimize the schedule."
            buttonText="Generate Optimized Schedule"
            generatePrompt={(prompt) => `Optimize an appointment schedule: "${prompt}"`}
            resultTitle="Generated Optimized Schedule"
        />
    );
}
