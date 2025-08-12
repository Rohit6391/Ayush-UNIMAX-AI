"use client";
import { TextGenerator } from "./TextGenerator";

export function PeerReviewSummarizer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Upload peer reviews to summarize them."
            buttonText="Generate Peer Review Summary"
            generatePrompt={(prompt) => `Summarize peer reviews: "${prompt}"`}
            resultTitle="Generated Peer Review Summary"
        />
    );
}
