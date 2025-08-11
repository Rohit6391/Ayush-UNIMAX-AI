"use client";
import { TextGenerator } from "./TextGenerator";

export function StatisticalPatternFinder({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Paste a dataset or describe it. e.g., 'Dataset of daily temperatures for a month: 72, 75, 71...'"
            buttonText="Find Patterns"
            generatePrompt={(prompt) => 
                `You are a statistician. Analyze the following dataset and identify any significant patterns, trends, or correlations. Provide a summary of your findings. Data: "${prompt}"`
            }
            resultTitle="Statistical Patterns"
        />
    );
}
