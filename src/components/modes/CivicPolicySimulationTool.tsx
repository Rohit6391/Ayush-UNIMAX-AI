"use client";
import { TextGenerator } from "./TextGenerator";

export function CivicPolicySimulationTool({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a civic policy to simulate its effects."
            buttonText="Generate Policy Simulation"
            generatePrompt={(prompt) => `Simulate a civic policy: "${prompt}"`}
            resultTitle="Generated Policy Simulation"
        />
    );
}
