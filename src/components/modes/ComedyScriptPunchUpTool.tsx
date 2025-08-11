"use client";
import { TextGenerator } from "./TextGenerator";

export function ComedyScriptPunchUpTool({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Paste a joke or a short comedic scene that isn't landing."
            buttonText="Punch Up Script"
            generatePrompt={(prompt) => 
                `You are a professional comedy writer. "Punch up" the following joke or scene by providing several funnier alternative lines or scenarios. Explain why your suggestions are funnier. Scene/Joke: "${prompt}"`
            }
            resultTitle="Punched-Up Script"
        />
    );
}
