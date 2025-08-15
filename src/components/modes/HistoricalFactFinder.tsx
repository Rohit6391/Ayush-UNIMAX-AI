"use client";
import { TextGenerator } from "./TextGenerator";

export function HistoricalFactFinder({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Interesting facts about Ancient Egypt'"
            buttonText="Find Facts"
            generatePrompt={(prompt) => 
                `You are a historian. Provide 5 interesting and verifiable historical facts about the following topic: "${prompt}"`
            }
            resultTitle="Historical Facts"
        />
    );
}
