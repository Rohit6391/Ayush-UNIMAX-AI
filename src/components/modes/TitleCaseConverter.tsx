"use client";
import { TextUtilities } from "./TextUtilities";

export function TitleCaseConverter({ mode }: { mode: any }) {
    return (
        <TextUtilities
            mode={mode}
            promptPlaceholder="Paste text to convert to title case."
            buttonText="Convert to Title Case"
            generatePrompt={(prompt) => `Convert the following text to title case. Text: "${prompt}"`}
            resultTitle="Title Case"
        />
    );
}
