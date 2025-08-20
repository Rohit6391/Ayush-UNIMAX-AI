"use client";
import { TextGenerator } from "./TextGenerator";

export function MindMapOutlineMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Enter a central topic for a mind map."
            buttonText="Create Mind Map Outline"
            generatePrompt={(p: string) => `Create a mind map outline for the topic: "${p}"`}
            resultTitle="Mind Map Outline"
        />
    );
}
