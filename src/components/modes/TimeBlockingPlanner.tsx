
"use client";
import { TextGenerator } from "./TextGenerator";

export function TimeBlockingPlanner({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Create a time-blocked schedule for my workday (9am-5pm) with tasks: write report, team meeting, answer emails.'"
            buttonText="Plan Time Blocks"
            generatePrompt={(p: string) => `You are a productivity expert. Create a simple, text-based time-blocked schedule for the following tasks and time frame. Tasks/Timeframe: "${p}"`}
            resultTitle="Time-Blocked Schedule"
        />
    );
}
