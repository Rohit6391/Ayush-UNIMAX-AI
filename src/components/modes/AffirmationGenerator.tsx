"use client";
import { TextGenerator } from "./TextGenerator";

export function AffirmationGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Affirmations for self-confidence' or 'Affirmations for a positive morning'"
            buttonText="Generate Affirmations"
            generatePrompt={(prompt) => 
                `You are a wellness coach. Create a list of 10 positive affirmations based on the following theme. The affirmations should be encouraging and easy to repeat. Theme: "${prompt}"`
            }
            resultTitle="Your Affirmations"
        />
    );
}
