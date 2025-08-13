"use client";
import { TextGenerator } from "./TextGenerator";

export function AudioLoopMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Create a relaxing ambient loop' or 'A funky drum beat'"
            buttonText="Generate Audio Loop Plan"
            generatePrompt={(prompt) => 
                `You are a music producer. Describe how to create a short, seamless audio loop based on the user's request. Suggest instruments, tempo, and arrangement. Request: "${prompt}"`
            }
            resultTitle="Audio Loop Plan"
        />
    );
}
