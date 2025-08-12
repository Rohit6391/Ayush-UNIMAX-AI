"use client";
import { TextGenerator } from "./TextGenerator";

export function ResourceAllocationForecaster({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a project to forecast resource allocation needs."
            buttonText="Generate Resource Allocation"
            generatePrompt={(prompt) => `Forecast resource allocation: "${prompt}"`}
            resultTitle="Generated Resource Allocation"
        />
    );
}
