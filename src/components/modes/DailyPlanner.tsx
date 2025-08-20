"use client";
import { TextUtilities } from "./TextUtilities";

export function DailyPlanner({ mode }: { mode: any }) {
    return (
        <TextUtilities
            mode={mode}
            promptPlaceholder="List your tasks for the day."
            buttonText="Plan Day"
            generatePrompt={(prompt) => `Create a simple schedule for the following tasks: "${prompt}"`}
            resultTitle="Daily Plan"
        />
    );
}
