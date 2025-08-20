"use client";
import { TextGenerator } from "./TextGenerator";

export function StepByStepGuideMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a process to create a step-by-step guide."
            buttonText="Make Guide"
            generatePrompt={(p: string) => `Create a step-by-step guide for: "${p}"`}
            resultTitle="Step-by-Step Guide"
        />
    );
}
