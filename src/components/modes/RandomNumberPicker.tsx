"use client";
import { TextGenerator } from "./TextGenerator";

export function RandomNumberPicker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Pick a random number between 1 and 100.'"
            buttonText="Pick Random Number"
            generatePrompt={(prompt) => 
                `You are a random number generator. Pick a random number based on the following range. Range: "${prompt}"`
            }
            resultTitle="Random Number"
        />
    );
}
