"use client";
import { TextGenerator } from "./TextGenerator";

export function ResearchSummaryMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Paste the full text of a research paper or scientific article here."
            buttonText="Create Summary"
            generatePrompt={(prompt) => 
                `You are a science journalist. Summarize the following research paper into a concise and easy-to-understand summary for a lay audience. Explain the key findings and their significance. Paper: "${prompt}"`
            }
            resultTitle="Research Summary"
        />
    );
}
