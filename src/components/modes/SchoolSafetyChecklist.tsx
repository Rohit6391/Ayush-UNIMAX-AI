"use client";
import { TextGenerator } from "./TextGenerator";

export function SchoolSafetyChecklist({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A safety checklist for a school playground.'"
            buttonText="Make Checklist"
            generatePrompt={(p: string) => 
                `You are a school administrator. Create a general safety checklist for a school environment based on the user's request. Request: "${p}"`
            }
            resultTitle="School Safety Checklist"
        />
    );
}
