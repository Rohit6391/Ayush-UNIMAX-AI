"use client";
import { TextGenerator } from "./TextGenerator";

export function EulogyWriter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A eulogy for a beloved grandparent who was kind and funny.'"
            buttonText="Write Eulogy"
            generatePrompt={(prompt) => 
                `You are a compassionate writer. Write a thoughtful and respectful eulogy based on the following description. Focus on celebrating the person's life and positive qualities. Description: "${prompt}"`
            }
            resultTitle="Generated Eulogy"
        />
    );
}
