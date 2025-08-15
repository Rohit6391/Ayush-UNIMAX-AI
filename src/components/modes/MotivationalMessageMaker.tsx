"use client";
import { TextGenerator } from "./TextGenerator";

export function MotivationalMessageMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'for a friend starting a new job' or 'for someone feeling discouraged'"
            buttonText="Create Message"
            generatePrompt={(prompt) => 
                `You are a motivational coach. Write a short, uplifting, and encouraging message for the following situation. Situation: "${prompt}"`
            }
            resultTitle="Motivational Message"
        />
    );
}
