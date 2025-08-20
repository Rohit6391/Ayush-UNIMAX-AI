"use client";
import { TextUtilities } from "./TextUtilities";

export function EmojiReplacer({ mode }: { mode: any }) {
    return (
        <TextUtilities
            mode={mode}
            promptPlaceholder="Paste text to add emojis to."
            buttonText="Add Emojis"
            generatePrompt={(prompt) => `Add relevant emojis to the following text. Text: "${prompt}"`}
            resultTitle="Text with Emojis"
        />
    );
}
