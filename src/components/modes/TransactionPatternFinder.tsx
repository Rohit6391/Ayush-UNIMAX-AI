"use client";
import { TextGenerator } from "./TextGenerator";

export function TransactionPatternFinder({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide transaction data to find patterns."
            buttonText="Generate Transaction Patterns"
            generatePrompt={(prompt) => `Find patterns in transaction data: "${prompt}"`}
            resultTitle="Generated Transaction Patterns"
        />
    );
}
