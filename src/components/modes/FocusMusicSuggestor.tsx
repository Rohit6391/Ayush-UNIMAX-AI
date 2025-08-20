
"use client";
import { TextGenerator } from "./TextGenerator";

export function FocusMusicSuggestor({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Suggest some music for deep focus while coding'"
            buttonText="Get Music Suggestions"
            generatePrompt={(p: string) => `You are a music curator. Suggest three genres or types of music that are good for focus, based on the user's request. Request: "${p}"`}
            resultTitle="Focus Music Suggestions"
        />
    );
}
