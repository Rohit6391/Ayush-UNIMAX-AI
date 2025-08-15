"use client";
import { TextGenerator } from "./TextGenerator";

export function SideCharacterGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'The wise old mentor for a fantasy hero.'"
            buttonText="Generate Side Character"
            generatePrompt={(prompt) => 
                `You are a writer. Suggest an interesting side character for a story, including their role, a unique personality trait, and how they help or hinder the protagonist. Prompt: "${prompt}"`
            }
            resultTitle="Side Character Idea"
        />
    );
}
