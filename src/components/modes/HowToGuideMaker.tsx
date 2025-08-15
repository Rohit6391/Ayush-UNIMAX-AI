
"use client";
import { TextGenerator } from "./TextGenerator";

export function HowToGuideMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a task to create a how-to guide for."
            buttonText="Make Guide"
            generatePrompt={(prompt) => `Create a how-to guide for: "${prompt}"`}
            resultTitle="How-To Guide"
        />
    );
}

    