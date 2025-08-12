"use client";
import { TextGenerator } from "./TextGenerator";

export function RoadRepairPriorityPlanner({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide road data to plan repair priorities."
            buttonText="Generate Road Repair Plan"
            generatePrompt={(prompt) => `Plan road repairs: "${prompt}"`}
            resultTitle="Generated Road Repair Plan"
        />
    );
}
