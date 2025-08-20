
"use client";
import { TextGenerator } from "./TextGenerator";

export function SurveyResultSummarizer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Summarize survey results: 60% of users liked the new feature.'"
            buttonText="Summarize Results"
            generatePrompt={(p: string) => 
                `You are a data analyst. Summarize the following survey results into a few key findings. Results: "${p}"`
            }
            resultTitle="Survey Summary"
        />
    );
}
