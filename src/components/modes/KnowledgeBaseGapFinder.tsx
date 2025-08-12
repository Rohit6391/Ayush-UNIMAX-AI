"use client";
import { TextGenerator } from "./TextGenerator";

export function KnowledgeBaseGapFinder({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide a knowledge base to find gaps."
            buttonText="Generate Knowledge Base Gaps"
            generatePrompt={(prompt) => `Find knowledge base gaps: "${prompt}"`}
            resultTitle="Generated Knowledge Base Gaps"
        />
    );
}
