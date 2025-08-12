"use client";
import { TextGenerator } from "./TextGenerator";

export function RenewableEnergyYieldEstimator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a renewable energy project to estimate its yield."
            buttonText="Generate Energy Yield Estimate"
            generatePrompt={(prompt) => `Estimate renewable energy yield: "${prompt}"`}
            resultTitle="Generated Energy Yield Estimate"
        />
    );
}
