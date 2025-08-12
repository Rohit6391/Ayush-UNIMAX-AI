"use client";
import { TextGenerator } from "./TextGenerator";

export function AgentTrainingNeedsAnalyzer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide agent data to analyze their training needs."
            buttonText="Generate Agent Training Needs"
            generatePrompt={(prompt) => `Analyze agent training needs: "${prompt}"`}
            resultTitle="Generated Agent Training Needs"
        />
    );
}
