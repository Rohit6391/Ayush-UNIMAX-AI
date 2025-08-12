"use client";
import { TextGenerator } from "./TextGenerator";

export function SocialSentimentAnalyzer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide a topic to analyze social media sentiment."
            buttonText="Generate Social Sentiment Analysis"
            generatePrompt={(prompt) => `Analyze social sentiment: "${prompt}"`}
            resultTitle="Generated Social Sentiment Analysis"
        />
    );
}
