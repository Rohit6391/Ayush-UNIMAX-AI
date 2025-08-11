"use client";
import { TextGenerator } from "./TextGenerator";

export function MultiVariableTrendPredictor({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe multiple related trends. e.g., 'Interest rates are rising, and consumer spending is decreasing. What is the likely impact on the housing market?'"
            buttonText="Predict Trend"
            generatePrompt={(prompt) => 
                `You are an economic analyst. Based on the interplay of the following variables, predict the most likely future trend. Explain your reasoning and any assumptions made. Variables: "${prompt}"`
            }
            resultTitle="Multi-Variable Trend Prediction"
        />
    );
}
