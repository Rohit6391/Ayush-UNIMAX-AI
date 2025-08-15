"use client";
import { TextGenerator } from "./TextGenerator";

export function OfficeSafetyChecklist({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A monthly office safety checklist.'"
            buttonText="Make Checklist"
            generatePrompt={(prompt) => 
                `You are an office manager. Create a general safety checklist for an office environment. Include points on ergonomics, fire safety, and clear walkways. Request: "${prompt}"`
            }
            resultTitle="Office Safety Checklist"
        />
    );
}
