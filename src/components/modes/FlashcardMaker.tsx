"use client";
import { TextGenerator } from "./TextGenerator";

export function FlashcardMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Paste a list of terms and definitions, or a topic like 'French vocabulary for beginners'"
            buttonText="Make Flashcards"
            generatePrompt={(prompt) => 
                `You are a study assistant. Create a set of flashcards from the following text or topic. Each flashcard should have a 'Term' and a 'Definition'. Format the output clearly. Request: "${prompt}"`
            }
            resultTitle="Generated Flashcards"
        />
    );
}
