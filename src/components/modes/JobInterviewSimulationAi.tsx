"use client";
import { TextGenerator } from "./TextGenerator";

export function JobInterviewSimulationAi({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Choose a job role to simulate an interview."
            buttonText="Generate Interview Simulation"
            generatePrompt={(prompt) => `Simulate a job interview: "${prompt}"`}
            resultTitle="Generated Interview Simulation"
        />
    );
}
