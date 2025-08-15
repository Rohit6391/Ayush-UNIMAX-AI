
"use client";
import { TextGenerator } from "./TextGenerator";

export function TutorialScriptWriter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a topic for a tutorial script."
            buttonText="Write Script"
            generatePrompt={(prompt) => `Write a tutorial script for: "${prompt}"`}
            resultTitle="Tutorial Script"
        />
    );
}

    