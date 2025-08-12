"use client";
import { TextGenerator } from "./TextGenerator";

export function PostProductionWorkflowPlanner({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a project to plan the post-production workflow."
            buttonText="Generate Post-Production Workflow"
            generatePrompt={(prompt) => `Plan a post-production workflow: "${prompt}"`}
            resultTitle="Generated Post-Production Workflow"
        />
    );
}
