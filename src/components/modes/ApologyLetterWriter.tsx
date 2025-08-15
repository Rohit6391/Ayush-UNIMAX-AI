"use client";
import { TextGenerator } from "./TextGenerator";

export function ApologyLetterWriter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'An apology for being late to a meeting.'"
            buttonText="Write Apology"
            generatePrompt={(prompt) => 
                `You are a professional communicator. Write a polite and sincere apology for the following situation. The apology should take responsibility and be constructive. Situation: "${prompt}"`
            }
            resultTitle="Apology Letter"
        />
    );
}
