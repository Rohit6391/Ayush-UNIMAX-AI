"use client";
import { TextGenerator } from "./TextGenerator";

export function ThankYouNoteMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A thank-you note for a birthday gift' or 'Thanks for a job interview.'"
            buttonText="Make Note"
            generatePrompt={(prompt) => 
                `You are a thoughtful writer. Create a short, sincere thank-you note for the following occasion. Occasion: "${prompt}"`
            }
            resultTitle="Thank-You Note"
        />
    );
}
