
"use client";
import { TextGenerator } from "./TextGenerator";

export function StatisticsSummarizer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide data to summarize statistics."
            buttonText="Generate Statistics Summary"
            generatePrompt={(prompt) => `Summarize statistics for: "${prompt}"`}
            resultTitle="Statistics Summary"
        />
    );
}

    