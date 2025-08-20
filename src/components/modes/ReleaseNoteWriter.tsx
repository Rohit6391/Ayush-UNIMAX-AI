"use client";
import { TextGenerator } from "./TextGenerator";

export function ReleaseNoteWriter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Version 2.1 of our app includes a new dark mode and bug fixes.'"
            buttonText="Write Release Notes"
            generatePrompt={(p: string) => 
                `You are a technical writer. Write clear and concise release notes for a software update based on the following changes. Changes: "${p}"`
            }
            resultTitle="Release Notes"
        />
    );
}
