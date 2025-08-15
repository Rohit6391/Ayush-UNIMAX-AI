
"use client";
import { TextUtilities } from "./TextUtilities";

export function ChartIdeaGenerator({ mode }: { mode: any }) {
    return (
        <TextUtilities
            mode={mode}
            promptPlaceholder="e.g., 'Monthly sales data for a year'"
            buttonText="Suggest Chart Type"
            generatePrompt={(prompt) => `Suggest the best chart type (e.g., bar, line, pie) to visualize the following data. Explain why. Data: "${prompt}"`}
            resultTitle="Chart Suggestion"
        />
    );
}
