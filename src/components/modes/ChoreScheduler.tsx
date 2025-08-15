"use client";
import { TextGenerator } from "./TextGenerator";

export function ChoreScheduler({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Assign chores for a family of four for a week'"
            buttonText="Schedule Chores"
            generatePrompt={(prompt) => 
                `You are a family organizer. Create a simple chore schedule based on the following request. Assign chores to people or days as specified. Request: "${prompt}"`
            }
            resultTitle="Chore Schedule"
        />
    );
}
