"use client";
import { TextGenerator } from "./TextGenerator";

export function CrossDepartmentCommunicationTracker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide data to track cross-departmental communication."
            buttonText="Generate Communication Tracker"
            generatePrompt={(prompt) => `Track cross-departmental communication: "${prompt}"`}
            resultTitle="Generated Communication Tracker"
        />
    );
}
