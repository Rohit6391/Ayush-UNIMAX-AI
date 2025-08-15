
"use client";
import { TextGenerator } from "./TextGenerator";

export function ProblemStatementMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a problem to frame a statement."
            buttonText="Frame Statement"
            generatePrompt={(prompt) => `Create a problem statement for: "${prompt}"`}
            resultTitle="Problem Statement"
        />
    );
}

    