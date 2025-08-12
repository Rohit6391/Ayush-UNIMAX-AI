"use client";
import { TextGenerator } from "./TextGenerator";

export function KnowledgeTransferOptimizer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a process to optimize knowledge transfer."
            buttonText="Generate Knowledge Transfer"
            generatePrompt={(prompt) => `Optimize knowledge transfer: "${prompt}"`}
            resultTitle="Generated Knowledge Transfer"
        />
    );
}
