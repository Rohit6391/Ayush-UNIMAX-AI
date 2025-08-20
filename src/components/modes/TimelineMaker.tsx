
"use client";
import { TextGenerator } from "./TextGenerator";

export function TimelineMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide a series of events to create a timeline."
            buttonText="Create Timeline"
            generatePrompt={(p: string) => `Create a timeline for: "${p}"`}
            resultTitle="Timeline"
        />
    );
}
