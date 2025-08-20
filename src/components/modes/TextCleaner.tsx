"use client";
import { TextUtilities } from "./TextUtilities";

export function TextCleaner({ mode }: { mode: any }) {
    return (
        <TextUtilities
            mode={mode}
            promptPlaceholder="Paste messy text here."
            buttonText="Clean Text"
            generatePrompt={(prompt) => `Clean up the following text by removing extra spaces and line breaks. Text: "${prompt}"`}
            resultTitle="Cleaned Text"
        />
    );
}
