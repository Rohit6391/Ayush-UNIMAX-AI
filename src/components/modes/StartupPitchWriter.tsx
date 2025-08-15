"use client";
import { TextGenerator } from "./TextGenerator";

export function StartupPitchWriter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'An app that connects local farmers with consumers'"
            buttonText="Write Pitch"
            generatePrompt={(prompt) => 
                `You are a venture capitalist. Write a short, compelling startup pitch (an "elevator pitch") for the following business idea. It should clearly state the problem, solution, and market opportunity. Idea: "${prompt}"`
            }
            resultTitle="Startup Pitch"
        />
    );
}
