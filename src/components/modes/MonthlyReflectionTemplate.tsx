
"use client";
import { TextGenerator } from "./TextGenerator";

export function MonthlyReflectionTemplate({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A monthly reflection on my career growth.'"
            buttonText="Create Reflection Template"
            generatePrompt={(p: string) => `You are a life coach. Create a template with 5 thoughtful reflection questions for a monthly review based on the user's topic. Topic: "${p}"`}
            resultTitle="Monthly Reflection Template"
        />
    );
}
