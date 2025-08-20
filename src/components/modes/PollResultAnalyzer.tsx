"use client";
import { TextUtilities } from "./TextUtilities";

export function PollResultAnalyzer({ mode }: { mode: any }) {
    return (
        <TextUtilities
            mode={mode}
            promptPlaceholder="e.g., 'Analyze results: Option A: 45 votes, Option B: 55 votes.'"
            buttonText="Analyze Poll Results"
            generatePrompt={(prompt) => `Analyze the following poll results and provide a brief summary of the outcome. Results: "${prompt}"`}
            resultTitle="Poll Analysis"
        />
    );
}
