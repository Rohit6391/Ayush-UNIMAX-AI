"use client";
import { TextGenerator } from "./TextGenerator";

export function EmergencyEvacuationPlanner({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a location to plan an emergency evacuation."
            buttonText="Generate Evacuation Plan"
            generatePrompt={(prompt) => `Plan an emergency evacuation: "${prompt}"`}
            resultTitle="Generated Evacuation Plan"
        />
    );
}
