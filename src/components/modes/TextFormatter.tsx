"use client";
import { TextUtilities } from "./TextUtilities";

export function TextFormatter({ mode }: { mode: any }) {
    return (
        <TextUtilities
            mode={mode}
            promptPlaceholder="Paste text to format."
            buttonText="Format Text"
            generatePrompt={(prompt) => `Format the following text with clear headings and lists. Text: "${prompt}"`}
            resultTitle="Formatted Text"
        />
    );
}
