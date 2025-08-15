"use client";
import { TextGenerator } from "./TextGenerator";

export function LoanCalculator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Loan of $10,000 at 5% interest over 3 years. What are the monthly payments?'"
            buttonText="Calculate Loan"
            generatePrompt={(prompt) => 
                `You are a loan calculator. Calculate the loan details (e.g., monthly payments, total interest) based on the following information. Show your work. Details: "${prompt}"`
            }
            resultTitle="Loan Calculation"
        />
    );
}
