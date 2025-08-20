"use client";
import { TextUtilities } from "./TextUtilities";

export function HashtagGenerator({ mode }: { mode: any }) {
    return (
        <TextUtilities
            mode={mode}
            promptPlaceholder="Enter a topic for hashtags."
            buttonText="Generate Hashtags"
            generatePrompt={(prompt) => `Suggest 5 relevant hashtags for the topic: "${prompt}"`}
            resultTitle="Hashtags"
        />
    );
}
