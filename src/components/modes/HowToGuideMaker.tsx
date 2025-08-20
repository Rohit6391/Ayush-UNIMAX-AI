
"use client";
import { TextGenerator } from "./TextGenerator";

export function HowToGuideMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a task to create a how-to guide for."
            buttonText="Make Guide"
            generatePrompt={(p: string) => `Create a how-to guide for: "${p}"`}
            resultTitle="How-To Guide"
        />
    );
}
