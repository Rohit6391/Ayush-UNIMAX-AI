"use client";
import { TextGenerator } from "./TextGenerator";

export function AppWalkthroughWriter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A walkthrough for a new user signing up for a social media app.'"
            buttonText="Write Walkthrough"
            generatePrompt={(prompt) => 
                `You are a technical writer. Create a simple, step-by-step onboarding walkthrough for a user based on the following scenario. Scenario: "${prompt}"`
            }
            resultTitle="App Walkthrough"
        />
    );
}
