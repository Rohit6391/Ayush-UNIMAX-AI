"use client";
import { TextGenerator } from "./TextGenerator";

export function DisasterPreparednessGuide({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'How to prepare for an earthquake.' or 'What to include in a hurricane kit.'"
            buttonText="Get Preparedness Guide"
            generatePrompt={(p: string) => 
                `You are a disaster preparedness expert. Create a guide with key steps and a checklist for the following disaster scenario. Scenario: "${p}"`
            }
            resultTitle="Disaster Preparedness Guide"
        />
    );
}
