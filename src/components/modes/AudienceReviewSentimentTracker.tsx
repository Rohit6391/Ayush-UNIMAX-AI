"use client";
import { TextGenerator } from "./TextGenerator";

export function AudienceReviewSentimentTracker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide reviews to track audience sentiment."
            buttonText="Generate Audience Sentiment"
            generatePrompt={(prompt) => `Track audience sentiment: "${prompt}"`}
            resultTitle="Generated Audience Sentiment"
        />
    );
}
