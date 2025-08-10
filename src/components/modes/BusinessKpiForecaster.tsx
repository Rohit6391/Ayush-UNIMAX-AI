"use client";
import { TextGenerator } from "./TextGenerator";

export function BusinessKpiForecaster({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Forecast Q4 sales based on current growth of 5% month-over-month' or 'Predict user churn for next quarter given a 10% price increase'"
            buttonText="Generate Forecast"
            generatePrompt={(prompt) => 
                `You are a senior business analyst. Based on the following information, provide a text-based forecast and analysis. Explain your reasoning, assumptions, and potential risks. Do not generate charts, only a written report. Request: "${prompt}"`
            }
            resultTitle="Business KPI Forecast"
        />
    );
}
