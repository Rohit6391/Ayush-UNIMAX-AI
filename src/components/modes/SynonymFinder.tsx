"use client";
import { TextUtilities } from "./TextUtilities";

export function SynonymFinder({ mode }: { mode: any }) {
    return (
        <TextUtilities
            mode={mode}
            promptPlaceholder="Enter a word to find synonyms for."
            buttonText="Find Synonyms"
            generatePrompt={(prompt) => `Provide 5 synonyms for the word: "${prompt}"`}
            resultTitle="Synonyms"
        />
    );
}
