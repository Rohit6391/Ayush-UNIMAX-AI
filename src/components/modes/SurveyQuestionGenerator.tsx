"use client";
import { TextGenerator } from "./TextGenerator";

export function SurveyQuestionGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'customer satisfaction for a new product' or 'employee feedback on company culture'"
            buttonText="Generate Questions"
            generatePrompt={(prompt) => 
                `You are a market researcher. Create five structured survey questions to gather feedback on the following topic. Include a mix of multiple-choice and open-ended questions. Topic: "${prompt}"`
            }
            resultTitle="Survey Questions"
        />
    );
}
