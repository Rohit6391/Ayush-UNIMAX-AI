"use client";
import { TextGenerator } from "./TextGenerator";

export function AcronymExpander({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Paste text containing acronyms like NASA, FBI, etc."
            buttonText="Expand Acronyms"
            generatePrompt={(prompt) => 
                `You are a technical writer and editor. Find all acronyms in the following text and provide their full, expanded form. If an acronym could have multiple meanings, provide the most likely one given the context. Text: "${prompt}"`
            }
            resultTitle="Expanded Acronyms"
        />
    );
}
