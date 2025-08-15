"use client";
import { TextGenerator } from "./TextGenerator";

export function StretchingRoutineGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A 5-minute stretching routine for after a run' or 'Stretches for lower back pain'"
            buttonText="Generate Routine"
            generatePrompt={(prompt) => 
                `You are a physical therapist. Create a simple and safe stretching routine for the following purpose. List 3-5 stretches with clear instructions for each. Purpose: "${prompt}"`
            }
            resultTitle="Stretching Routine"
        />
    );
}
