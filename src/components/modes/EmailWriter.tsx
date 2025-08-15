"use client";
import { TextGenerator } from "./TextGenerator";

export function EmailWriter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'An email to my boss requesting time off' or 'A follow-up email after a job interview'..."
            buttonText="Write Email"
            generatePrompt={(p: string) => `Write a well-formatted and professional email for the following purpose. The email should be in the same language as the prompt. Purpose: ${p}`}
            resultTitle="Generated Email"
        />
    );
}
