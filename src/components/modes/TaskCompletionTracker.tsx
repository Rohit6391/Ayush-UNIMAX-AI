
"use client";
import { TextGenerator } from "./TextGenerator";

export function TaskCompletionTracker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Create a checklist for my 'Finish Report' project.'"
            buttonText="Create Task Tracker"
            generatePrompt={(p: string) => `You are a project manager. Create a simple text-based checklist with sub-tasks for the following main task. Task: "${p}"`}
            resultTitle="Task Completion Tracker"
        />
    );
}
