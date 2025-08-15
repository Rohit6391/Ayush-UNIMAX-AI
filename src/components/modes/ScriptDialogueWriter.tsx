"use client";
import { TextGenerator } from "./TextGenerator";

export function ScriptDialogueWriter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A short, tense dialogue between a detective and a suspect'"
            buttonText="Write Dialogue"
            generatePrompt={(prompt) => 
                `You are a screenwriter. Write a short piece of dialogue between two characters based on the following scenario. Use standard script format. Scenario: "${prompt}"`
            }
            resultTitle="Generated Dialogue"
        />
    );
}
