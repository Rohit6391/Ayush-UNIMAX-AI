"use client";
import { TextGenerator } from "./TextGenerator";

export function TaskPriorityPlanner({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="List your tasks to plan their priorities."
            buttonText="Generate Task Priorities"
            generatePrompt={(prompt) => `Plan task priorities: "${prompt}"`}
            resultTitle="Generated Task Priorities"
        />
    );
}
