"use client";
import { TextGenerator } from "./TextGenerator";

export function MedicalLiteratureSummarizer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Paste medical literature to summarize."
            buttonText="Generate Medical Summary"
            generatePrompt={(prompt) => `Summarize medical literature: "${prompt}"`}
            resultTitle="Generated Medical Summary"
        />
    );
}
