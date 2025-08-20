
"use client";
import { TextGenerator } from "./TextGenerator";

export function CompostingGuide({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'How to start a compost bin in my backyard.'"
            buttonText="Get Composting Guide"
            generatePrompt={(p: string) => 
                `You are an expert on sustainable living. Provide a simple, step-by-step guide to composting based on the user's request. Include what can and cannot be composted. Request: "${p}"`
            }
            resultTitle="Composting Guide"
        />
    );
}
