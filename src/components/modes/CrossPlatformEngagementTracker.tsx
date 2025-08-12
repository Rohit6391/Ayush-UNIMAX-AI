"use client";
import { TextGenerator } from "./TextGenerator";

export function CrossPlatformEngagementTracker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide data to track user engagement across platforms."
            buttonText="Generate Cross-Platform Engagement"
            generatePrompt={(prompt) => `Track cross-platform engagement: "${prompt}"`}
            resultTitle="Generated Cross-Platform Engagement"
        />
    );
}
