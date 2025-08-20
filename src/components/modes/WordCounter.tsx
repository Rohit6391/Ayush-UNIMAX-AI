"use client";
import { TextUtilities } from "./TextUtilities";

export function WordCounter({ mode }: { mode: any }) {
    return (
        <TextUtilities
            mode={mode}
            promptPlaceholder="Paste text to count words."
            buttonText="Count Words"
            generatePrompt={(prompt) => `Count the number of words in the following text. Text: "${prompt}"`}
            resultTitle="Word Count"
        />
    );
}
