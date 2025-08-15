"use client";
import { TextGenerator } from "./TextGenerator";

export function ReferenceListMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Create a reference list in MLA format for an essay on Shakespeare.'"
            buttonText="Make Reference List"
            generatePrompt={(prompt) => 
                `You are an academic research assistant. Create a formatted reference list based on the user's request. Request: "${prompt}"`
            }
            resultTitle="Reference List"
        />
    );
}
