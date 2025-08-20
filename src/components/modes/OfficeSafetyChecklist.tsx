"use client";
import { TextGenerator } from "./TextGenerator";

export function OfficeSafetyChecklist({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A monthly office safety checklist.'"
            buttonText="Make Checklist"
            generatePrompt={(p: string) => 
                `You are an office manager. Create a general safety checklist for an office environment. Include points on ergonomics, fire safety, and clear walkways. Request: "${p}"`
            }
            resultTitle="Office Safety Checklist"
        />
    );
}
