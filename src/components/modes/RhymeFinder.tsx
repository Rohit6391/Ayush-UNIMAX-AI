"use client";
import { TextGenerator } from "./TextGenerator";

export function RhymeFinder({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'creative' or 'song'"
            buttonText="Find Rhymes"
            generatePrompt={(prompt) => 
                `You are a poet. Provide a list of 10 words that rhyme with the following word. Word: "${prompt}"`
            }
            resultTitle="Rhymes"
        />
    );
}
