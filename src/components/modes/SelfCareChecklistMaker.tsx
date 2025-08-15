
"use client";
import { TextGenerator } from "./TextGenerator";

export function SelfCareChecklistMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A simple checklist for a relaxing Sunday.'"
            buttonText="Make Checklist"
            generatePrompt={(prompt) => 
                `You are a wellness advocate. Create a simple checklist of 5-7 self-care activities based on the user's request. Request: "${prompt}"`
            }
            resultTitle="Self-Care Checklist"
        />
    );
}

    