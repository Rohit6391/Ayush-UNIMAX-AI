"use client";
import { TextGenerator } from "./TextGenerator";

export function ROICalculator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Investment: $1000, Return: $1500' or 'Marketing spend: $500, Revenue generated: $2000'"
            buttonText="Calculate ROI"
            generatePrompt={(prompt) => 
                `You are a financial analyst. Calculate the Return on Investment (ROI) based on the following figures and present the result as a percentage. Figures: "${prompt}"`
            }
            resultTitle="Return on Investment (ROI)"
        />
    );
}
