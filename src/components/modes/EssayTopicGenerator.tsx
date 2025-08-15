"use client";
import { TextGenerator } from "./TextGenerator";

export function EssayTopicGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Suggest essay topics for a high school history class on World War II'"
            buttonText="Generate Essay Topics"
            generatePrompt={(prompt) => 
                `You are a teacher. Suggest 5 thought-provoking essay topics based on the following subject or theme: "${prompt}"`
            }
            resultTitle="Essay Topics"
        />
    );
}
