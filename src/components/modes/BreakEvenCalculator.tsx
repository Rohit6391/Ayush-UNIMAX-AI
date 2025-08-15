"use client";
import { TextGenerator } from "./TextGenerator";

export function BreakEvenCalculator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Fixed costs are $1000, variable cost per unit is $5, and selling price is $15.'"
            buttonText="Calculate Break-Even Point"
            generatePrompt={(prompt) => 
                `You are a business analyst. Calculate the break-even point in units based on the following information. Show the formula. Information: "${prompt}"`
            }
            resultTitle="Break-Even Analysis"
        />
    );
}
