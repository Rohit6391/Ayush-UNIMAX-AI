"use client";
import { TextGenerator } from "./TextGenerator";

export function ExpenseCategorizationAi({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Paste a list of expenses to categorize them."
            buttonText="Generate Categorized Expenses"
            generatePrompt={(prompt) => `Categorize expenses: "${prompt}"`}
            resultTitle="Generated Categorized Expenses"
        />
    );
}
