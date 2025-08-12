"use client";
import { TextGenerator } from "./TextGenerator";

export function WaterUsageEfficiencyPlanner({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe your water usage to get an efficiency plan."
            buttonText="Generate Water Efficiency Plan"
            generatePrompt={(prompt) => `Plan water usage efficiency: "${prompt}"`}
            resultTitle="Generated Water Efficiency Plan"
        />
    );
}
