
"use client";
import { TextGenerator } from "./TextGenerator";

export function MotivationQuoteSender({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'I need some motivation for my workout.'"
            buttonText="Get Quote"
            generatePrompt={(prompt) => 
                `You are a motivational speaker. Provide one powerful and relevant motivational quote for the following situation. Include the author. Situation: "${prompt}"`
            }
            resultTitle="Motivational Quote"
        />
    );
}

    