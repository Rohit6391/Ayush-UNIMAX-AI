"use client";
import { TextUtilities } from "./TextUtilities";

export function BlogIntroWriter({ mode }: { mode: any }) {
    return (
        <TextUtilities
            mode={mode}
            promptPlaceholder="Enter a blog post topic."
            buttonText="Write Intro"
            generatePrompt={(prompt) => `Write an engaging introduction for a blog post about: "${prompt}"`}
            resultTitle="Blog Introduction"
        />
    );
}
