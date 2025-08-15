"use client";
import { TextGenerator } from "./TextGenerator";

export function ResearchQuestionGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'The impact of social media on mental health.'"
            buttonText="Generate Research Questions"
            generatePrompt={(prompt) => 
                `You are a university professor. Generate three insightful and focused research questions for a paper on the following topic. Topic: "${prompt}"`
            }
            resultTitle="Research Questions"
        />
    );
}
