
"use client";
import { TextGenerator } from "./TextGenerator";

export function ProductivityTimer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Start a 25-minute Pomodoro timer.'"
            buttonText="Set Timer"
            generatePrompt={(p: string) => `You are a productivity timer. Confirm that a timer has been set based on the user's request. You cannot create a real timer. Request: "${p}"`}
            resultTitle="Timer Plan"
        />
    );
}
