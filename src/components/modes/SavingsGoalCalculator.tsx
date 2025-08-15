"use client";
import { TextGenerator } from "./TextGenerator";

export function SavingsGoalCalculator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'I want to save $5000 in 12 months. How much do I need to save per month?'"
            buttonText="Calculate Savings"
            generatePrompt={(prompt) => 
                `You are a financial calculator. Based on the following savings goal, calculate the required savings per period. Goal: "${prompt}"`
            }
            resultTitle="Savings Goal Calculation"
        />
    );
}
