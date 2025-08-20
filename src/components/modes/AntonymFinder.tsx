"use client";
import { TextUtilities } from "./TextUtilities";

export function AntonymFinder({ mode }: { mode: any }) {
    return (
        <TextUtilities
            mode={mode}
            promptPlaceholder="Enter a word to find antonyms for."
            buttonText="Find Antonyms"
            generatePrompt={(prompt) => `Provide 3 antonyms for the word: "${prompt}"`}
            resultTitle="Antonyms"
        />
    );
}
