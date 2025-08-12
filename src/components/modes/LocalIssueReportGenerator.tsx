"use client";
import { TextGenerator } from "./TextGenerator";

export function LocalIssueReportGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a local issue to generate a report."
            buttonText="Generate Local Issue Report"
            generatePrompt={(prompt) => `Generate a report on a local issue: "${prompt}"`}
            resultTitle="Generated Local Issue Report"
        />
    );
}
