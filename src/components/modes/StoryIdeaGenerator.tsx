"use client";
import { TextUtilities } from "./TextUtilities";

export function StoryIdeaGenerator({ mode }: { mode: any }) {
    return (
        <TextUtilities
            mode={mode}
            promptPlaceholder="Enter a genre (e.g., sci-fi, fantasy)."
            buttonText="Generate Ideas"
            generatePrompt={(prompt) => `Suggest 3 story ideas for the genre: "${prompt}"`}
            resultTitle="Story Ideas"
        />
    );
}
