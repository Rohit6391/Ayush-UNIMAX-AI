
"use client";
import { TextGenerator } from "./TextGenerator";

export function BreathingExerciseGuide({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A breathing exercise to help with anxiety.'"
            buttonText="Get Exercise"
            generatePrompt={(prompt) => 
                `You are a wellness coach. Describe a simple breathing exercise for the user's need. Provide clear, step-by-step instructions. Request: "${prompt}"`
            }
            resultTitle="Breathing Exercise"
        />
    );
}

    