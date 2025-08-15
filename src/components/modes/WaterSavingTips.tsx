"use client";
import { TextGenerator } from "./TextGenerator";

export function WaterSavingTips({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'How to save water in the bathroom.'"
            buttonText="Get Water Saving Tips"
            generatePrompt={(prompt) => 
                `You are a conservation expert. Provide a list of 5 practical tips for saving water based on the user's request. Request: "${prompt}"`
            }
            resultTitle="Water Saving Tips"
        />
    );
}
