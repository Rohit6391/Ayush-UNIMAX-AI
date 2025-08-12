"use client";
import { TextGenerator } from "./TextGenerator";

export function RenewableGridLoadBalancer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide grid data to balance loads."
            buttonText="Generate Grid Load Balancing"
            generatePrompt={(prompt) => `Balance a renewable grid load: "${prompt}"`}
            resultTitle="Generated Grid Load Balancing"
        />
    );
}
