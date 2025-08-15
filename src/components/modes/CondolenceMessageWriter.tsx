"use client";
import { TextGenerator } from "./TextGenerator";

export function CondolenceMessageWriter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A message for someone who has lost a pet.'"
            buttonText="Write Message"
            generatePrompt={(prompt) => 
                `You are a compassionate writer. Write a short, sincere message of condolence for the following situation. Situation: "${prompt}"`
            }
            resultTitle="Condolence Message"
        />
    );
}
