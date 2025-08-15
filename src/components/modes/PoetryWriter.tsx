"use client";
import { TextGenerator } from "./TextGenerator";

export function PoetryWriter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A poem about the city at night'"
            buttonText="Write Poem"
            generatePrompt={(prompt) => 
                `You are a poet. Write a short, evocative poem based on the following theme or idea: "${prompt}"`
            }
            resultTitle="Generated Poem"
        />
    );
}
