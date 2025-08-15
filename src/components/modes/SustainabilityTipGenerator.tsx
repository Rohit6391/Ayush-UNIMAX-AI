"use client";
import { TextGenerator } from "./TextGenerator";

export function SustainabilityTipGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Easy ways to be more sustainable at home.'"
            buttonText="Get Sustainability Tips"
            generatePrompt={(prompt) => 
                `You are an environmentalist. Suggest three simple and practical tips for living more sustainably based on the user's request. Request: "${prompt}"`
            }
            resultTitle="Sustainability Tips"
        />
    );
}
