"use client";
import { TextGenerator } from "./TextGenerator";

export function PoliticalNewsSummaryMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Summarize the latest debate on healthcare policy.'"
            buttonText="Make Summary"
            generatePrompt={(p: string) => 
                `You are a political analyst. Provide a neutral, factual summary of the following political event or topic. Topic: "${p}"`
            }
            resultTitle="Political News Summary"
        />
    );
}
