"use client";
import { TextGenerator } from "./TextGenerator";

export function FactorySafetyChecklist({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A general safety checklist for a manufacturing plant.'"
            buttonText="Make Checklist"
            generatePrompt={(prompt) => 
                `You are an industrial safety officer. Create a general safety checklist for a factory setting. Include points on personal protective equipment (PPE), machinery safety, and emergency procedures. Request: "${prompt}"`
            }
            resultTitle="Factory Safety Checklist"
        />
    );
}
