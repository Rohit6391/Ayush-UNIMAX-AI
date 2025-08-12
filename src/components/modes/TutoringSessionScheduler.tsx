"use client";
import { TextGenerator } from "./TextGenerator";

export function TutoringSessionScheduler({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide availability to schedule tutoring sessions."
            buttonText="Generate Tutoring Schedule"
            generatePrompt={(prompt) => `Schedule tutoring sessions: "${prompt}"`}
            resultTitle="Generated Tutoring Schedule"
        />
    );
}
