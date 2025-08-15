
"use client";
import { TextGenerator } from "./TextGenerator";

export function HabitTracker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Help me track my goal of reading 10 pages every day.'"
            buttonText="Set Up Tracker"
            generatePrompt={(prompt) => 
                `You are a productivity coach. Create a simple text-based habit tracker plan for the following goal. Suggest how to track it daily and offer a word of encouragement. Goal: "${prompt}"`
            }
            resultTitle="Habit Plan"
        />
    );
}

    