"use client";
import { TextGenerator } from "./TextGenerator";

export function ContextAwareSummaryMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Paste the text here, followed by the context. e.g., '[Article about renewable energy] Context: summarize for an investor.'"
            buttonText="Generate Summary"
            generatePrompt={(prompt) => 
                `You are a research assistant. Summarize the following document, focusing specifically on the aspects relevant to the provided context. Document and Context: "${prompt}"`
            }
            resultTitle="Context-Aware Summary"
        />
    );
}
