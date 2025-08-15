"use client";
import { TextGenerator } from "./TextGenerator";

export function ChildSafetyTips({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Basic safety tips for children at home.'"
            buttonText="Get Safety Tips"
            generatePrompt={(prompt) => 
                `You are a child safety expert. Provide a list of 5 important safety tips for children based on the following scenario. Scenario: "${prompt}"`
            }
            resultTitle="Child Safety Tips"
        />
    );
}
