
"use client";
import { TextGenerator } from "./TextGenerator";

export function GoalTracker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'My goal is to learn how to code in Python.'"
            buttonText="Set Up Goal"
            generatePrompt={(prompt) => 
                `You are a success coach. Break down the following user goal into 3-5 smaller, actionable steps. Goal: "${prompt}"`
            }
            resultTitle="Actionable Steps"
        />
    );
}

    