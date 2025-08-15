
"use client";
import { TextGenerator } from "./TextGenerator";

export function GanttChartGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="List project tasks with start and end dates."
            buttonText="Generate Gantt Chart"
            generatePrompt={(prompt) => `Create a text-based Gantt chart for the project: "${prompt}"`}
            resultTitle="Gantt Chart"
        />
    );
}

    