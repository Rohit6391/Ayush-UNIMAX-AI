"use client";
import { TextUtilities } from "./TextUtilities";

export function BlogIdeaGenerator({ mode }: { mode: any }) {
    return (
        <TextUtilities
            mode={mode}
            promptPlaceholder="Enter a topic for a blog."
            buttonText="Generate Ideas"
            generatePrompt={(prompt) => `Suggest 5 blog post ideas for the topic: "${prompt}"`}
            resultTitle="Blog Ideas"
        />
    );
}
