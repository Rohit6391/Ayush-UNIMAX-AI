"use client";
import { TextGenerator } from "./TextGenerator";

export function PodcastTopicPlanner({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe your podcast to get topic ideas."
            buttonText="Generate Podcast Topics"
            generatePrompt={(prompt) => `Plan podcast topics: "${prompt}"`}
            resultTitle="Generated Podcast Topics"
        />
    );
}
