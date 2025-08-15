
"use client";
import { TextGenerator } from "./TextGenerator";

export function InnovationIdeaGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a problem to generate innovative ideas for."
            buttonText="Generate Ideas"
            generatePrompt={(prompt) => `Generate innovative ideas for the problem: "${prompt}"`}
            resultTitle="Innovation Ideas"
        />
    );
}

    