"use client";
import { TextGenerator } from "./TextGenerator";

export function FilmScriptCoverageAi({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Upload a film script to get coverage."
            buttonText="Generate Script Coverage"
            generatePrompt={(prompt) => `Get film script coverage: "${prompt}"`}
            resultTitle="Generated Script Coverage"
        />
    );
}
