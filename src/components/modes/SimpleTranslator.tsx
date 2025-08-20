"use client";
import { TextUtilities } from "./TextUtilities";

export function SimpleTranslator({ mode }: { mode: any }) {
    return (
        <TextUtilities
            mode={mode}
            promptPlaceholder="Enter text and target language (e.g., 'Hello world to Spanish')."
            buttonText="Translate"
            generatePrompt={(prompt) => `Translate the following text. Text and Target Language: "${prompt}"`}
            resultTitle="Translation"
        />
    );
}
