"use client";
import { TextGenerator } from "./TextGenerator";

export function RealTimeDefinitionFinder({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Paste text and surround words you want defined with asterisks, e.g., 'The *photosynthesis* process is complex.'"
            buttonText="Find Definitions"
            generatePrompt={(prompt) => 
                `You are a lexicographer. Provide clear and concise definitions for the words enclosed in asterisks in the following text. Text: "${prompt}"`
            }
            resultTitle="Definitions"
        />
    );
}
