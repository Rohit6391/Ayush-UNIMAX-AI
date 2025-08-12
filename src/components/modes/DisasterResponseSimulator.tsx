"use client";
import { TextGenerator } from "./TextGenerator";

export function DisasterResponseSimulator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a disaster scenario to simulate a response."
            buttonText="Generate Disaster Response Simulation"
            generatePrompt={(prompt) => `Simulate a disaster response: "${prompt}"`}
            resultTitle="Generated Disaster Response Simulation"
        />
    );
}
