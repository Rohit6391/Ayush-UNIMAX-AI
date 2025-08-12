"use client";
import { TextGenerator } from "./TextGenerator";

export function CustomerReviewSummarizer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Paste customer reviews to summarize."
            buttonText="Generate Review Summary"
            generatePrompt={(prompt) => `Summarize customer reviews: "${prompt}"`}
            resultTitle="Generated Review Summary"
        />
    );
}
