"use client";
import { TextGenerator } from "./TextGenerator";

export function CountdownTimerMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Create a 5 minute countdown timer.'"
            buttonText="Create Countdown"
            generatePrompt={(prompt) => 
                `You are a timer tool. Describe how a user could set up a countdown timer based on their request. You cannot create a real timer. Request: "${prompt}"`
            }
            resultTitle="Countdown Timer Plan"
        />
    );
}
