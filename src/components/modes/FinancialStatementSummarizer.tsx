"use client";
import { TextGenerator } from "./TextGenerator";

export function FinancialStatementSummarizer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Paste a financial statement to summarize."
            buttonText="Generate Financial Summary"
            generatePrompt={(prompt) => `Summarize a financial statement: "${prompt}"`}
            resultTitle="Generated Financial Summary"
        />
    );
}
