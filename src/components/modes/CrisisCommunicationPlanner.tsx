"use client";
import { TextGenerator } from "./TextGenerator";

export function CrisisCommunicationPlanner({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a crisis to plan communications."
            buttonText="Generate Crisis Communication Plan"
            generatePrompt={(prompt) => `Plan crisis communications: "${prompt}"`}
            resultTitle="Generated Crisis Communication Plan"
        />
    );
}
