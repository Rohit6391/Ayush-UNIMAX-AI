"use client";
import { TextGenerator } from "./TextGenerator";

export function FeedbackSentimentClassifier({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Upload feedback to classify its sentiment."
            buttonText="Generate Feedback Sentiment"
            generatePrompt={(prompt) => `Classify feedback sentiment: "${prompt}"`}
            resultTitle="Generated Feedback Sentiment"
        />
    );
}
