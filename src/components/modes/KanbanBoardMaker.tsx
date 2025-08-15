
"use client";
import { TextGenerator } from "./TextGenerator";

export function KanbanBoardMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide tasks for a Kanban board (e.g., To Do, In Progress, Done)."
            buttonText="Make Kanban Board"
            generatePrompt={(prompt) => `Create a text-based Kanban board for the tasks: "${prompt}"`}
            resultTitle="Kanban Board"
        />
    );
}

    