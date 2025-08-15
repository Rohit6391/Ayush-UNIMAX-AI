"use client";
import { TextGenerator } from "./TextGenerator";

export function ToastSpeechWriter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A toast for a wedding' or 'A toast for a retirement party.'"
            buttonText="Write Toast"
            generatePrompt={(prompt) => 
                `You are an event planner and speechwriter. Write a short, heartfelt, and appropriate toast for the following occasion. Occasion: "${prompt}"`
            }
            resultTitle="Generated Toast"
        />
    );
}
