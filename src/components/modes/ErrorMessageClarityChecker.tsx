"use client";
import { TextGenerator } from "./TextGenerator";

export function ErrorMessageClarityChecker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide an error message to check its clarity."
            buttonText="Generate Error Message Clarity"
            generatePrompt={(prompt) => `Check error message clarity: "${prompt}"`}
            resultTitle="Generated Error Message Clarity"
        />
    );
}
