"use client";
import { TextGenerator } from "./TextGenerator";

export function AudioMixer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'How to mix two techno tracks together' or 'Transition from a pop song to a hip-hop track'"
            buttonText="Get Mixing Plan"
            generatePrompt={(prompt) => 
                `You are a professional DJ. Provide a detailed plan for mixing two audio tracks. Describe the transition points, EQ adjustments, and effects to use for a seamless mix. Request: "${prompt}"`
            }
            resultTitle="Audio Mixing Plan"
        />
    );
}
