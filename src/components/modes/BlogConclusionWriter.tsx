"use client";
import { TextUtilities } from "./TextUtilities";

export function BlogConclusionWriter({ mode }: { mode: any }) {
    return (
        <TextUtilities
            mode={mode}
            promptPlaceholder="Enter a blog post topic."
            buttonText="Write Conclusion"
            generatePrompt={(prompt) => `Write a strong concluding paragraph for a blog post about: "${prompt}"`}
            resultTitle="Blog Conclusion"
        />
    );
}
