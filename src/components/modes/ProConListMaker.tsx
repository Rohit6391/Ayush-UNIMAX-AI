"use client";
import { TextGenerator } from "./TextGenerator";

export function ProConListMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'buying a new car' or 'moving to a new city'"
            buttonText="Make Pro/Con List"
            generatePrompt={(prompt) => 
                `You are a critical thinker. Create a balanced list of pros and cons for the following decision. Decision: "${prompt}"`
            }
            resultTitle="Pros and Cons"
        />
    );
}
