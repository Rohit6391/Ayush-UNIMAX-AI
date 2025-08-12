"use client";
import { TextGenerator } from "./TextGenerator";

export function SewageNetworkMonitoringAi({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide network data to monitor for issues."
            buttonText="Generate Sewage Network Monitoring"
            generatePrompt={(prompt) => `Monitor a sewage network: "${prompt}"`}
            resultTitle="Generated Sewage Network Monitoring"
        />
    );
}
