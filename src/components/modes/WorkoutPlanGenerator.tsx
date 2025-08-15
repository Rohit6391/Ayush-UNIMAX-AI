
"use client";
import { TextGenerator } from "./TextGenerator";

export function WorkoutPlanGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A 3-day workout plan for a beginner focused on full-body strength.'"
            buttonText="Generate Workout"
            generatePrompt={(prompt) => 
                `You are a personal trainer. Create a simple workout plan based on the user's request. Include exercises, sets, and reps for each day. Request: "${prompt}"`
            }
            resultTitle="Workout Plan"
        />
    );
}

    