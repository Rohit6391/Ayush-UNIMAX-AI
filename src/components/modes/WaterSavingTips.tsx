
"use client";
import { TextGenerator } from "./TextGenerator";

export function WaterSavingTips({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'How to save water in the bathroom.'"
            buttonText="Get Water Saving Tips"
            generatePrompt={(p: string) => 
                `You are a conservation expert. Provide a list of 5 practical tips for saving water based on the user's request. Request: "${p}"`
            }
            resultTitle="Water Saving Tips"
        />
    );
}
