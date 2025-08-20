
"use client";
import { TextGenerator } from "./TextGenerator";

export function WorkoutTimer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Set a timer for a 45-second plank.'"
            buttonText="Set Timer"
            generatePrompt={(p: string) => 
                `You are a workout timer. Confirm that a timer has been set for the specified exercise and duration. You cannot create a real timer. Request: "${p}"`
            }
            resultTitle="Workout Timer Set"
        />
    );
}
