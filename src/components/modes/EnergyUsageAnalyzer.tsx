"use client";
import { TextGenerator } from "./TextGenerator";

export function EnergyUsageAnalyzer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide energy usage data to analyze and optimize."
            buttonText="Generate Energy Usage Analysis"
            generatePrompt={(prompt) => `Analyze energy usage: "${prompt}"`}
            resultTitle="Generated Energy Usage Analysis"
        />
    );
}
