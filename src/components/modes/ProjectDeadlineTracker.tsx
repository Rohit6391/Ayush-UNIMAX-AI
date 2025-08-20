
"use client";
import { TextGenerator } from "./TextGenerator";

export function ProjectDeadlineTracker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="List project tasks and their due dates."
            buttonText="Track Deadlines"
            generatePrompt={(p: string) => `Create a deadline tracking list for: "${p}"`}
            resultTitle="Project Deadlines"
        />
    );
}
