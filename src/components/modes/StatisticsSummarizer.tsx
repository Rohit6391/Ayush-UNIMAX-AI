"use client";
import { TextGenerator } from "./TextGenerator";

export function StatisticsSummarizer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide data to summarize statistics."
            buttonText="Generate Statistics Summary"
            generatePrompt={(p: string) => `Summarize statistics for: "${p}"`}
            resultTitle="Statistics Summary"
        />
    );
}
