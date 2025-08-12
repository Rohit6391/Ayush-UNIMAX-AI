"use client";
import { TextGenerator } from "./TextGenerator";

export function WorkloadBalancerAi({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe your team to balance their workloads."
            buttonText="Generate Balanced Workload"
            generatePrompt={(prompt) => `Balance workloads: "${prompt}"`}
            resultTitle="Generated Balanced Workload"
        />
    );
}
