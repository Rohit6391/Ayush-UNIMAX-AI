
"use client";
import { TextGenerator } from "./TextGenerator";

export function ExperimentDesignGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Design an experiment to test if classical music helps plants grow faster.'"
            buttonText="Design Experiment"
            generatePrompt={(prompt) => 
                `You are a scientist. Create a simple step-by-step design for an experiment based on the following request. Include materials, procedure, and how to measure the results. Request: "${prompt}"`
            }
            resultTitle="Experiment Design"
        />
    );
}
