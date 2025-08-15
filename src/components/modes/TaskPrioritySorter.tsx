"use client";
import { TextGenerator } from "./TextGenerator";

export function TaskPrioritySorter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'write report, reply to emails, schedule meeting, buy groceries'"
            buttonText="Sort Tasks"
            generatePrompt={(prompt) => 
                `You are a productivity expert. Organize the following list of tasks by priority (High, Medium, Low) using a method like the Eisenhower Matrix (Urgent/Important). List: "${prompt}"`
            }
            resultTitle="Prioritized Tasks"
        />
    );
}
