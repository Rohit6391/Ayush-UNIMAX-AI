
"use client";
import { TextGenerator } from "./TextGenerator";

export function CybersecurityChecklist({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A personal cybersecurity checklist.'"
            buttonText="Make Checklist"
            generatePrompt={(p: string) => 
                `You are a cybersecurity analyst. Create a checklist of essential steps a person can take to improve their personal cybersecurity. Request: "${p}"`
            }
            resultTitle="Cybersecurity Checklist"
        />
    );
}
