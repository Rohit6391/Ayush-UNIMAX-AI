"use client";
import { TextGenerator } from "./TextGenerator";

export function StudyBreakReminder({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Remind me to take a 10-minute break every hour.'"
            buttonText="Set Break Reminder"
            generatePrompt={(p: string) => `You are a study coach. Create a plan for study break reminders based on the user's request. You cannot set real reminders. Request: "${p}"`}
            resultTitle="Study Break Plan"
        />
    );
}
