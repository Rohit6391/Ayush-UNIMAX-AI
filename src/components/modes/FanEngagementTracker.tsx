"use client";
import { TextGenerator } from "./TextGenerator";

export function FanEngagementTracker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide social media data to track fan engagement."
            buttonText="Generate Fan Engagement Analysis"
            generatePrompt={(prompt) => `Track fan engagement: "${prompt}"`}
            resultTitle="Generated Fan Engagement Analysis"
        />
    );
}
