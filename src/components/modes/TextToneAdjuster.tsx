"use client";
import { TextUtilities } from "./TextUtilities";

export function TextToneAdjuster({ mode }: { mode: any }) {
    return (
        <TextUtilities
            mode={mode}
            promptPlaceholder="Paste text and the desired tone (e.g., formal, casual)."
            buttonText="Adjust Tone"
            generatePrompt={(prompt) => `Rewrite the following text to have a specific tone. Text and Tone: "${prompt}"`}
            resultTitle="Adjusted Text"
        />
    );
}
