"use client";
import { TextGenerator } from "./TextGenerator";

export function PetNameGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Names for a golden retriever puppy' or 'Unique names for a black cat'"
            buttonText="Generate Pet Names"
            generatePrompt={(prompt) => 
                `You are a creative pet namer. Suggest 10 unique and fitting names for a pet based on the following description. Description: "${prompt}"`
            }
            resultTitle="Pet Name Suggestions"
        />
    );
}
