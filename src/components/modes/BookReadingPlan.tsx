
"use client";
import { TextGenerator } from "./TextGenerator";

export function BookReadingPlan({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'I want to read 'War and Peace' in 3 months' or 'Create a reading plan for the Harry Potter series.'"
            buttonText="Create Reading Plan"
            generatePrompt={(p: string) => `You are a librarian and reading coach. Create a structured reading plan based on the following goal. Break it down into manageable parts (e.g., chapters per week) and include milestones. Goal: "${p}"`}
            resultTitle="Book Reading Plan"
        />
    );
}
