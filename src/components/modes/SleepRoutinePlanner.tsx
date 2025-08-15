
"use client";
import { TextGenerator } from "./TextGenerator";

export function SleepRoutinePlanner({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'I want to create a better evening routine to improve my sleep.'"
            buttonText="Plan Routine"
            generatePrompt={(prompt) => 
                `You are a sleep consultant. Suggest a simple, relaxing evening routine to help improve sleep quality based on the user's request. Include 3-5 steps. Request: "${prompt}"`
            }
            resultTitle="Sleep Routine"
        />
    );
}

    