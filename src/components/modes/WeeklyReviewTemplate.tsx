
"use client";
import { TextGenerator } from "./TextGenerator";

export function WeeklyReviewTemplate({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A weekly review for my personal goals'"
            buttonText="Create Review Template"
            generatePrompt={(p: string) => `You are a productivity coach. Create a template for a weekly review with sections for Wins, Challenges, and Goals for Next Week, based on the user's focus. Focus: "${p}"`}
            resultTitle="Weekly Review Template"
        />
    );
}
