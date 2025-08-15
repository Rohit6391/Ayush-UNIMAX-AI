"use client";
import { TextGenerator } from "./TextGenerator";

export function CybersecurityChecklist({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A personal cybersecurity checklist.'"
            buttonText="Make Checklist"
            generatePrompt={(prompt) => 
                `You are a cybersecurity analyst. Create a checklist of essential steps a person can take to improve their personal cybersecurity. Request: "${prompt}"`
            }
            resultTitle="Cybersecurity Checklist"
        />
    );
}
