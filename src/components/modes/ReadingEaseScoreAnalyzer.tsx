"use client";
import { TextGenerator } from "./TextGenerator";

export function ReadingEaseScoreAnalyzer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Upload text to analyze its reading ease score."
            buttonText="Generate Reading Ease Score"
            generatePrompt={(prompt) => `Analyze a reading ease score: "${prompt}"`}
            resultTitle="Generated Reading Ease Score"
        />
    );
}
