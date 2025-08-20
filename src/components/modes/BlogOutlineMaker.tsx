"use client";
import { TextUtilities } from "./TextUtilities";

export function BlogOutlineMaker({ mode }: { mode: any }) {
    return (
        <TextUtilities
            mode={mode}
            promptPlaceholder="Enter a topic for a blog post."
            buttonText="Make Outline"
            generatePrompt={(prompt) => `Create a simple outline for a blog post about: "${prompt}"`}
            resultTitle="Blog Outline"
        />
    );
}
