
"use client";
import { TextGenerator } from "./TextGenerator";

export function YogaRoutineGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A 15-minute morning yoga routine to wake up the body.'"
            buttonText="Generate Routine"
            generatePrompt={(prompt) => 
                `You are a yoga instructor. Create a sequence of yoga poses for the following routine. List the poses in order and suggest a duration for each. Routine: "${prompt}"`
            }
            resultTitle="Yoga Routine"
        />
    );
}

    