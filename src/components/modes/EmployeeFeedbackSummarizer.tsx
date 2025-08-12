"use client";
import { TextGenerator } from "./TextGenerator";

export function EmployeeFeedbackSummarizer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Upload employee feedback to summarize it."
            buttonText="Generate Feedback Summary"
            generatePrompt={(prompt) => `Summarize employee feedback: "${prompt}"`}
            resultTitle="Generated Feedback Summary"
        />
    );
}
