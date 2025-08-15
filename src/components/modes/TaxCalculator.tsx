"use client";
import { TextGenerator } from "./TextGenerator";

export function TaxCalculator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Estimate income tax on $50,000 with a 22% tax rate.'"
            buttonText="Calculate Tax"
            generatePrompt={(prompt) => 
                `You are a tax calculator. Provide a simple tax estimation based on the following figures. Note that this is a simplified estimate. Figures: "${prompt}"`
            }
            resultTitle="Tax Estimate"
        />
    );
}
