
"use client";
import { TextUtilities } from "./TextUtilities";

export function DataSummarizer({ mode }: { mode: any }) {
    return (
        <TextUtilities
            mode={mode}
            promptPlaceholder="Paste raw data here (e.g., a list of numbers, survey responses)."
            buttonText="Summarize Data"
            generatePrompt={(prompt) => `Summarize the following raw data, providing key insights and statistics (e.g., mean, median, mode, trends). Data: "${prompt}"`}
            resultTitle="Data Summary"
        />
    );
}
