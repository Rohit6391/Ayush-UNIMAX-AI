"use client";
import { TextGenerator } from "./TextGenerator";

export function CharacterDialogueImprover({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Paste a line or a short scene of dialogue here..."
            buttonText="Improve Dialogue"
            generatePrompt={(prompt) => 
                `You are a professional dialogue coach and screenwriter. Rewrite the following dialogue to make it more impactful, natural, and character-driven. Suggest several alternative lines. Dialogue: "${prompt}"`
            }
            resultTitle="Improved Dialogue"
        />
    );
}
