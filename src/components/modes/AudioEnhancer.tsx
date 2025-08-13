"use client";
import { TextGenerator } from "./TextGenerator";

export function AudioEnhancer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'How to improve the clarity of a podcast recording' or 'Make a vocal track sound warmer'"
            buttonText="Get Audio Enhancement Plan"
            generatePrompt={(prompt) => 
                `You are an expert audio engineer. Provide a step-by-step plan to enhance an audio recording based on the user's request. Include suggestions for EQ, compression, and other effects. Request: "${prompt}"`
            }
            resultTitle="Audio Enhancement Plan"
        />
    );
}
