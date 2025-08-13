"use client";
import { TextGenerator } from "./TextGenerator";

export function VirtualLabTechnician({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe an experiment to simulate it."
            buttonText="Generate Virtual Experiment"
            generatePrompt={(prompt) => `Simulate a lab experiment: "${prompt}"`}
            resultTitle="Generated Virtual Experiment"
        />
    );
}
