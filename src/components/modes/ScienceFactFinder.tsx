"use client";
import { TextGenerator } from "./TextGenerator";

export function ScienceFactFinder({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Interesting facts about black holes'"
            buttonText="Find Facts"
            generatePrompt={(prompt) => 
                `You are a scientist. Provide 5 interesting and verifiable scientific facts about the following topic: "${prompt}"`
            }
            resultTitle="Science Facts"
        />
    );
}
