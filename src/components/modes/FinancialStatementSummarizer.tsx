
"use client";
import { TextGenerator } from "./TextGenerator";
import { summarizeFinancialStatement } from "@/ai/flows/financial-statement-summarizer";

export function FinancialStatementSummarizer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Paste a financial statement (e.g., income statement, balance sheet) to summarize."
            buttonText="Summarize Statement"
            generatePrompt={(prompt) => `Summarize the following financial statement: "${prompt}"`}
            resultTitle="Financial Statement Summary"
            flow={(input: any) => summarizeFinancialStatement({ statement: input.prompt })}
        />
    );
}
