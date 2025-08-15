"use client";
import { TextGenerator } from "./TextGenerator";

export function ClimateChangeExplainer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Explain the greenhouse effect in simple terms.'"
            buttonText="Explain Climate Change"
            generatePrompt={(prompt) => 
                `You are a climate scientist. Explain the following aspect of climate change in a clear and simple way, suitable for a general audience. Aspect: "${prompt}"`
            }
            resultTitle="Climate Change Explanation"
        />
    );
}
