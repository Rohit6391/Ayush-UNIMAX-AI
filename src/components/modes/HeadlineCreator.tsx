"use client";
import { TextUtilities } from "./TextUtilities";

export function HeadlineCreator({ mode }: { mode: any }) {
    return (
        <TextUtilities
            mode={mode}
            promptPlaceholder="Enter a topic for a headline."
            buttonText="Create Headline"
            generatePrompt={(prompt) => `Suggest 3 catchy headlines for a blog post about: "${prompt}"`}
            resultTitle="Headlines"
        />
    );
}
