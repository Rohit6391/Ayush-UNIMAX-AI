"use client";
import { TextUtilities } from "./TextUtilities";

export function SpellingChecker({ mode }: { mode: any }) {
    return (
        <TextUtilities
            mode={mode}
            promptPlaceholder="Paste text to check spelling."
            buttonText="Check Spelling"
            generatePrompt={(prompt) => `Correct any spelling errors in the following text. Text: "${prompt}"`}
            resultTitle="Corrected Text"
        />
    );
}
