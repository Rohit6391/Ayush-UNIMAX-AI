"use client";
import { TextGenerator } from "./TextGenerator";

export function BudgetPlanner({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'My monthly income is $3000, and I want to save 20%. Break down my expenses for rent, food, and transport.'"
            buttonText="Generate Budget Plan"
            generatePrompt={(prompt) => 
                `You are a financial advisor. Create a simple budget plan based on the following information. Break down the expenses into categories and show the remaining amount. Details: "${prompt}"`
            }
            resultTitle="Budget Plan"
        />
    );
}
