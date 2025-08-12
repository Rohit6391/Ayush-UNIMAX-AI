"use client";
import { TextGenerator } from "./TextGenerator";

export function BlueprintErrorDetector({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Upload a blueprint to detect errors."
            buttonText="Generate Blueprint Error Check"
            generatePrompt={(prompt) => `Detect blueprint errors: "${prompt}"`}
            resultTitle="Generated Blueprint Error Check"
        />
    );
}
