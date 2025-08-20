
"use client";
import { TextGenerator } from "./TextGenerator";

export function LocalAttractionFinder({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'What are some interesting places to visit in New York City?'"
            buttonText="Find Attractions"
            generatePrompt={(p: string) => 
                `You are a local tour guide. Suggest three interesting local attractions for the following location. Describe each one briefly. Location: "${p}"`
            }
            resultTitle="Local Attraction Suggestions"
        />
    );
}
