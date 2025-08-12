"use client";
import { TextGenerator } from "./TextGenerator";

export function PathologyReportSummarizer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Paste a pathology report to summarize."
            buttonText="Generate Pathology Summary"
            generatePrompt={(prompt) => `Summarize a pathology report: "${prompt}"`}
            resultTitle="Generated Pathology Summary"
        />
    );
}
