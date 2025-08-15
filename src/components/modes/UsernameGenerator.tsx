"use client";
import { TextGenerator } from "./TextGenerator";

export function UsernameGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Generate usernames for a gamer who likes dragons.'"
            buttonText="Generate Usernames"
            generatePrompt={(prompt) => 
                `You are a username generator. Suggest 5 creative usernames based on the following theme. Theme: "${prompt}"`
            }
            resultTitle="Username Suggestions"
        />
    );
}
