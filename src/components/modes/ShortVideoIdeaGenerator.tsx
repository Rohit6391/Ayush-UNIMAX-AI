
"use client";
import { TextUtilities } from "./TextUtilities";

export function ShortVideoIdeaGenerator({ mode }: { mode: any }) {
    return (
        <TextUtilities
            mode={mode}
            promptPlaceholder="e.g., 'Quick video ideas for a cooking channel' or 'Short video concepts for a travel vlog'"
            buttonText="Generate Video Ideas"
            generatePrompt={(prompt) => `Suggest 5 short video ideas (e.g., for TikTok, Reels, Shorts) for the following channel or topic. Topic: "${prompt}"`}
            resultTitle="Short Video Ideas"
        />
    );
}
