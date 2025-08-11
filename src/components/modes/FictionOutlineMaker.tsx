"use client";
import { TextGenerator } from "./TextGenerator";

export function FictionOutlineMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide a brief story idea. e.g., 'A young wizard discovers a conspiracy at their magic school.'"
            buttonText="Create Outline"
            generatePrompt={(prompt) => 
                `You are a bestselling author. Create a detailed, chapter-by-chapter outline for a fiction novel based on the following story idea. Use a standard three-act structure (Act I, Act II, Act III). Idea: "${prompt}"`
            }
            resultTitle="Fiction Outline"
        />
    );
}
