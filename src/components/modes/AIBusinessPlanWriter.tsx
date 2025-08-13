"use client";
import { TextGenerator } from "./TextGenerator";

export function AIBusinessPlanWriter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe your business idea to generate a plan."
            buttonText="Generate Business Plan"
            generatePrompt={(prompt) => `Write a business plan for: "${prompt}"`}
            resultTitle="Generated Business Plan"
        />
    );
}
