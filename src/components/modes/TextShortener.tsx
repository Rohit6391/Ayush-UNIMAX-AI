"use client";
import { TextUtilities } from "./TextUtilities";

export function TextShortener({ mode }: { mode: any }) {
    return (
        <TextUtilities
            mode={mode}
            promptPlaceholder="Paste a long paragraph to shorten."
            buttonText="Shorten Text"
            generatePrompt={(prompt) => `Shorten the following text to its main idea. Text: "${prompt}"`}
            resultTitle="Shortened Text"
        />
    );
}
