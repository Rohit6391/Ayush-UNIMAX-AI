
"use client";
import { TextGenerator } from "./TextGenerator";

export function MeditationGuide({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A 5-minute guided meditation for stress relief.'"
            buttonText="Get Guide"
            generatePrompt={(prompt) => 
                `You are a meditation coach. Write a short, guided meditation script based on the user's request. Focus on calming language and simple instructions. Request: "${prompt}"`
            }
            resultTitle="Meditation Guide"
        />
    );
}

    