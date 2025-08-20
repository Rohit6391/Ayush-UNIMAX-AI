"use client";
import { TextGenerator } from "./TextGenerator";

export function SportsUpdateWriter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'The final score of the Lakers vs. Celtics game.'"
            buttonText="Write Update"
            generatePrompt={(p: string) => 
                `You are a sports reporter. Write a brief update on the following sports event. Event: "${p}"`
            }
            resultTitle="Sports Update"
        />
    );
}
