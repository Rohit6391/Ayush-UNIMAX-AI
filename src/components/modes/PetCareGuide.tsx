"use client";
import { TextGenerator } from "./TextGenerator";

export function PetCareGuide({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Basic care for a new puppy' or 'How to care for a hamster'"
            buttonText="Get Pet Care Guide"
            generatePrompt={(prompt) => 
                `You are a veterinarian. Provide a basic care guide for the following pet. Include information on feeding, housing, and common health issues. Pet: "${prompt}"`
            }
            resultTitle="Pet Care Guide"
        />
    );
}
