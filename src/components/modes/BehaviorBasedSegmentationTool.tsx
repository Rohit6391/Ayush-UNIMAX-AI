"use client";
import { TextGenerator } from "./TextGenerator";

export function BehaviorBasedSegmentationTool({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide user data to segment them based on behavior."
            buttonText="Generate User Segments"
            generatePrompt={(prompt) => `Segment users by behavior: "${prompt}"`}
            resultTitle="Generated User Segments"
        />
    );
}
