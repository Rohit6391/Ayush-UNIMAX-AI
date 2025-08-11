"use client";
import { TextGenerator } from "./TextGenerator";

export function AlgorithmicExplainabilityTool({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe an algorithm's decision. e.g., 'An AI denied a loan application based on user data.'"
            buttonText="Explain Algorithm"
            generatePrompt={(prompt) => 
                `You are an explainable AI (XAI) specialist. Provide a clear, easy-to-understand explanation for a non-technical user about why an algorithm made a specific decision. Avoid jargon and focus on the most influential factors. Decision: "${prompt}"`
            }
            resultTitle="Algorithmic Explanation"
        />
    );
}
