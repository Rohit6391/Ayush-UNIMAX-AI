"use client";
import { TextGenerator } from "./TextGenerator";

export function IdiomUsageCoach({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Choose an idiom to get usage coaching."
            buttonText="Generate Idiom Coach"
            generatePrompt={(prompt) => `Get idiom usage coaching: "${prompt}"`}
            resultTitle="Generated Idiom Coach"
        />
    );
}
