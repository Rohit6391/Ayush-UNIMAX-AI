"use client";
import { TextGenerator } from "./TextGenerator";

export function TeamFeedbackCollector({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe the project or topic for feedback."
            buttonText="Create Feedback Form"
            generatePrompt={(p: string) => `Create a team feedback form for: "${p}"`}
            resultTitle="Feedback Form"
        />
    );
}
