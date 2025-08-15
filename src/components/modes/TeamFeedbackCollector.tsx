
"use client";
import { TextGenerator } from "./TextGenerator";

export function TeamFeedbackCollector({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe the project or topic for feedback."
            buttonText="Create Feedback Form"
            generatePrompt={(prompt) => `Create a team feedback form for: "${prompt}"`}
            resultTitle="Feedback Form"
        />
    );
}

    