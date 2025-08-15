
"use client";
import { TextGenerator } from "./TextGenerator";

export function ProjectDeadlineTracker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="List project tasks and their due dates."
            buttonText="Track Deadlines"
            generatePrompt={(prompt) => `Create a deadline tracking list for: "${prompt}"`}
            resultTitle="Project Deadlines"
        />
    );
}

    