
"use client";
import { TextUtilities } from "./TextUtilities";

export function YouTubeDescriptionWriter({ mode }: { mode: any }) {
    return (
        <TextUtilities
            mode={mode}
            promptPlaceholder="e.g., 'A video review of the new iPhone'"
            buttonText="Write YouTube Description"
            generatePrompt={(prompt) => `Write a compelling and SEO-friendly YouTube video description for the following video topic. Include a brief summary, relevant links (placeholders), and hashtags. Topic: "${prompt}"`}
            resultTitle="YouTube Description"
        />
    );
}
