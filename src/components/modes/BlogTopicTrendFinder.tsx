"use client";
import { TextGenerator } from "./TextGenerator";

export function BlogTopicTrendFinder({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe your blog to find trending topics."
            buttonText="Generate Trending Topics"
            generatePrompt={(prompt) => `Find trending blog topics: "${prompt}"`}
            resultTitle="Generated Trending Topics"
        />
    );
}
