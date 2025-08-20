"use client";
import { TextUtilities } from "./TextUtilities";

export function NoteSummarizer({ mode }: { mode: any }) {
    return (
        <TextUtilities
            mode={mode}
            promptPlaceholder="Paste your notes to summarize."
            buttonText="Summarize Notes"
            generatePrompt={(prompt) => `Summarize the following notes into key bullet points. Notes: "${prompt}"`}
            resultTitle="Summary"
        />
    );
}
