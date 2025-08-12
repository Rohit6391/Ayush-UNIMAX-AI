"use client";
import { TextGenerator } from "./TextGenerator";

export function StoreTrafficFlowAnalyzer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide store data to analyze traffic flow."
            buttonText="Generate Traffic Flow Analysis"
            generatePrompt={(prompt) => `Analyze store traffic flow: "${prompt}"`}
            resultTitle="Generated Traffic Flow Analysis"
        />
    );
}
