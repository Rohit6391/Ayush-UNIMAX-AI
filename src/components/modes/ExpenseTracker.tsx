"use client";
import { TextGenerator } from "./TextGenerator";

export function ExpenseTracker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Track my expenses for this week: Coffee $5, Lunch $15, Groceries $60'"
            buttonText="Track Expenses"
            generatePrompt={(prompt) => 
                `You are an expense tracker. Summarize the following expenses and provide a total. Expenses: "${prompt}"`
            }
            resultTitle="Expense Summary"
        />
    );
}
