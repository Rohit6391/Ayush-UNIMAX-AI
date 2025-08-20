"use client";
import { TextGenerator } from "./TextGenerator";

export function TravelSafetyTips({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Safety tips for solo travel in Europe.' or 'How to avoid pickpockets.'"
            buttonText="Get Safety Tips"
            generatePrompt={(p: string) => 
                `You are an experienced world traveler. Provide a list of 5 practical safety tips for the following travel scenario. Scenario: "${p}"`
            }
            resultTitle="Travel Safety Tips"
        />
    );
}
