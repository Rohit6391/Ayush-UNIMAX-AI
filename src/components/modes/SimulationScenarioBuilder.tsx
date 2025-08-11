"use client";
import { TextGenerator } from "./TextGenerator";

export function SimulationScenarioBuilder({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe the system to simulate. e.g., 'A simulation of customer flow in a grocery store.'"
            buttonText="Build Scenario"
            generatePrompt={(prompt) => 
                `You are a simulation expert. Create a detailed scenario for the following system. Define the entities, their behaviors, key variables, and the success metrics for the simulation. System: "${prompt}"`
            }
            resultTitle="Simulation Scenario"
        />
    );
}
