"use client";
import { TextGenerator } from "./TextGenerator";

export function RepairGuide({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'How to fix a wobbly chair leg' or 'Basic steps to repair a hole in a wall'"
            buttonText="Get Repair Guide"
            generatePrompt={(p: string) => `You are a DIY expert. Provide a simple, step-by-step guide for the following basic repair. Include a list of tools needed. Repair: "${p}"`}
            resultTitle="Repair Guide"
        />
    );
}
