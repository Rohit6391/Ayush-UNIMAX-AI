"use client";
import { TextUtilities } from "./TextUtilities";

export function YouTubeTagGenerator({ mode }: { mode: any }) {
    return (
        <TextUtilities
            mode={mode}
            promptPlaceholder="e.g., 'A let's play video of Minecraft'"
            buttonText="Generate YouTube Tags"
            generatePrompt={(prompt) => `Suggest a list of 15 relevant and high-traffic YouTube tags for a video on the following topic. Topic: "${prompt}"`}
            resultTitle="YouTube Tags"
        />
    );
}
