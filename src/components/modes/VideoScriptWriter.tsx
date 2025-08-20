"use client";
import { TextUtilities } from "./TextUtilities";

export function VideoScriptWriter({ mode }: { mode: any }) {
    return (
        <TextUtilities
            mode={mode}
            promptPlaceholder="e.g., 'A 2-minute video script explaining photosynthesis'"
            buttonText="Write Video Script"
            generatePrompt={(prompt) => `Write a concise and engaging video script for the following topic. Include scene descriptions and narration. Topic: "${prompt}"`}
            resultTitle="Video Script"
        />
    );
}
