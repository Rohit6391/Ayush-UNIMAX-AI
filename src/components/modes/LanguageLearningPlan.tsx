"use client";
import { TextGenerator } from "./TextGenerator";

export function LanguageLearningPlan({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A 1-month plan to learn basic Spanish for a trip.'"
            buttonText="Create Language Plan"
            generatePrompt={(p: string) => `You are a linguist and language teacher. Create a simple, week-by-week plan for learning a new language. Include topics for each week (e.g., greetings, basic grammar, ordering food). Request: "${p}"`}
            resultTitle="Language Learning Plan"
        />
    );
}
