"use client";
import { TextGenerator } from "./TextGenerator";

export function FlashcardAutoCreator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Paste text to create flashcards."
            buttonText="Generate Flashcards"
            generatePrompt={(prompt) => `Create flashcards: "${prompt}"`}
            resultTitle="Generated Flashcards"
        />
    );
}
