
"use client";
import { TextGenerator } from "./TextGenerator";

export function TimelineMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide a series of events to create a timeline."
            buttonText="Create Timeline"
            generatePrompt={(prompt) => `Create a timeline for: "${prompt}"`}
            resultTitle="Timeline"
        />
    );
}

    