"use client";
import { TextGenerator } from "./TextGenerator";

export function GreetingCardMessageMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A message for a get-well-soon card.'"
            buttonText="Make Message"
            generatePrompt={(prompt) => 
                `You are a greeting card writer. Suggest a short, appropriate message for the following type of greeting card. Card type: "${prompt}"`
            }
            resultTitle="Greeting Card Message"
        />
    );
}
