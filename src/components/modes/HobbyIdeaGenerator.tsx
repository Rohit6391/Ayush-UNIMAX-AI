
"use client";
import { TextGenerator } from "./TextGenerator";

export function HobbyIdeaGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Hobbies for someone who likes to be creative but has limited space.'"
            buttonText="Get Hobby Ideas"
            generatePrompt={(p: string) => `You are a life coach. Suggest three hobbies that a person might enjoy based on their interests. Interests: "${p}"`}
            resultTitle="Hobby Ideas"
        />
    );
}
