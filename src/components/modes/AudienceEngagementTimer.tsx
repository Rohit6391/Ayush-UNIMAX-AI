"use client";
import { TextGenerator } from "./TextGenerator";

export function AudienceEngagementTimer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Start a timer to track audience engagement."
            buttonText="Generate Audience Engagement"
            generatePrompt={(prompt) => `Time audience engagement: "${prompt}"`}
            resultTitle="Generated Audience Engagement"
        />
    );
}
