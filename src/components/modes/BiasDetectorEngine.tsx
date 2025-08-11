"use client";
import { TextGenerator } from "./TextGenerator";

export function BiasDetectorEngine({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Paste text or describe a dataset to check for bias."
            buttonText="Detect Bias"
            generatePrompt={(prompt) => 
                `You are an AI fairness expert. Analyze the following text or dataset description for potential sources of bias (e.g., gender, racial, socioeconomic). Highlight the biased elements and explain their potential negative impact. Data: "${prompt}"`
            }
            resultTitle="Bias Detection Report"
        />
    );
}
