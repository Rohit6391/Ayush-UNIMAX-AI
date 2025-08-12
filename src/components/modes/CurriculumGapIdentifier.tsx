"use client";
import { TextGenerator } from "./TextGenerator";

export function CurriculumGapIdentifier({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide a curriculum to identify gaps."
            buttonText="Generate Curriculum Gaps"
            generatePrompt={(prompt) => `Identify curriculum gaps: "${prompt}"`}
            resultTitle="Generated Curriculum Gaps"
        />
    );
}
