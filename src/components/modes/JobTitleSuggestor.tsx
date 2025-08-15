"use client";
import { TextGenerator } from "./TextGenerator";

export function JobTitleSuggestor({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A person who manages social media and creates content'"
            buttonText="Suggest Titles"
            generatePrompt={(prompt) => 
                `You are a human resources specialist. Suggest five suitable and professional job titles for a role with the following responsibilities. Responsibilities: "${prompt}"`
            }
            resultTitle="Job Title Suggestions"
        />
    );
}
