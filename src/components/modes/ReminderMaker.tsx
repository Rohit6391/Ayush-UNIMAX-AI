"use client";
import { TextGenerator } from "./TextGenerator";

export function ReminderMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Call mom tomorrow at 5 PM' or 'Submit the report by Friday'"
            buttonText="Set Reminder"
            generatePrompt={(prompt) => 
                `You are a personal assistant. Create a simple, clear reminder for the following task. Include the task, date, and time if provided. Task: "${prompt}"`
            }
            resultTitle="Reminder"
        />
    );
}
