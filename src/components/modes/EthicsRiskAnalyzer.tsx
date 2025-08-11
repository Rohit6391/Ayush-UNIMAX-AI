"use client";
import { TextGenerator } from "./TextGenerator";

export function EthicsRiskAnalyzer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe an AI application or system. e.g., 'An AI system that recommends criminal sentences.'"
            buttonText="Analyze Risks"
            generatePrompt={(prompt) => 
                `You are an AI ethics specialist. Analyze the following AI application for potential ethical risks, such as bias, fairness, transparency, and accountability. Suggest mitigation strategies for each identified risk. Application: "${prompt}"`
            }
            resultTitle="Ethical Risk Analysis"
        />
    );
}
