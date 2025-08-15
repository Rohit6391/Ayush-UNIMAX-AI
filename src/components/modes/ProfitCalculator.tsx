"use client";
import { TextGenerator } from "./TextGenerator";

export function ProfitCalculator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Revenue is $5000 and costs are $2200. What is the profit and profit margin?'"
            buttonText="Calculate Profit"
            generatePrompt={(prompt) => 
                `You are a business calculator. Calculate the profit and profit margin from the following figures. Show your work. Figures: "${prompt}"`
            }
            resultTitle="Profit Calculation"
        />
    );
}
