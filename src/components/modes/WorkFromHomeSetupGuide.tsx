"use client";
import { TextGenerator } from "./TextGenerator";

export function WorkFromHomeSetupGuide({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'How to create an ergonomic home office setup on a budget'"
            buttonText="Get Setup Guide"
            generatePrompt={(p: string) => `You are a productivity and ergonomics expert. Provide a guide with three essential tips for setting up a healthy and productive work-from-home space. Request: "${p}"`}
            resultTitle="Work-From-Home Setup Guide"
        />
    );
}
