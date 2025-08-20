"use client";
import { TextGenerator } from "./TextGenerator";

export function GanttChartGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="List project tasks with start and end dates."
            buttonText="Generate Gantt Chart"
            generatePrompt={(p: string) => `Create a text-based Gantt chart for the project: "${p}"`}
            resultTitle="Gantt Chart"
        />
    );
}
