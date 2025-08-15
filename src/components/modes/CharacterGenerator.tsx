"use client";
import { TextGenerator } from "./TextGenerator";

export function CharacterGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A grizzled detective with a troubled past' or 'A cheerful elf from a hidden forest'..."
            buttonText="Create Character"
            generatePrompt={(p: string) => `Create a detailed character profile based on the following description: ${p}. Include their name, appearance, personality, backstory, and motivations. The profile should be in the same language as the prompt.`}
            resultTitle="Character Profile"
        />
    );
}
