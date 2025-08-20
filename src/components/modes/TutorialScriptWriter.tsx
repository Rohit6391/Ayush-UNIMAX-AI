
"use client";
import { TextGenerator } from "./TextGenerator";

export function TutorialScriptWriter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a topic for a tutorial script."
            buttonText="Write Script"
            generatePrompt={(p: string) => `Write a tutorial script for: "${p}"`}
            resultTitle="Tutorial Script"
        />
    );
}
