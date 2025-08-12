"use client";
import { TextGenerator } from "./TextGenerator";

export function PuzzleDifficultyBalancer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a puzzle to balance its difficulty."
            buttonText="Generate Balanced Puzzle"
            generatePrompt={(prompt) => `Balance puzzle difficulty: "${prompt}"`}
            resultTitle="Generated Balanced Puzzle"
        />
    );
}
