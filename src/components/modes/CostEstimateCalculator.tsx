"use client";
import { TextGenerator } from "./TextGenerator";

export function CostEstimateCalculator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'building a small website' or 'a 3-day marketing campaign'"
            buttonText="Calculate Cost"
            generatePrompt={(prompt) => 
                `You are a project manager. Provide a rough, text-based cost estimate for the following project. Break down the costs into major categories (e.g., labor, materials, marketing). Project: "${prompt}"`
            }
            resultTitle="Cost Estimate"
        />
    );
}
