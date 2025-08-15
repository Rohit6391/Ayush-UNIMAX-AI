"use client";
import { TextGenerator } from "./TextGenerator";

export function EquationGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Generate 5 simple algebra problems for a 7th grader'"
            buttonText="Generate Equations"
            generatePrompt={(prompt) => 
                `You are a math teacher. Create a set of practice math equations based on the following request. Include the solutions separately. Request: "${prompt}"`
            }
            resultTitle="Generated Equations"
        />
    );
}
