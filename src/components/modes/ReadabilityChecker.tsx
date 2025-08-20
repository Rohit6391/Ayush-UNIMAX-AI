"use client";
import { TextUtilities } from "./TextUtilities";

export function ReadabilityChecker({ mode }: { mode: any }) {
    return (
        <TextUtilities
            mode={mode}
            promptPlaceholder="Paste text to check readability."
            buttonText="Check Readability"
            generatePrompt={(prompt) => `Analyze the readability of the following text and suggest an approximate grade level. Text: "${prompt}"`}
            resultTitle="Readability Analysis"
        />
    );
}
