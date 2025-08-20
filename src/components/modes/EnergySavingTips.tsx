"use client";
import { TextGenerator } from "./TextGenerator";

export function EnergySavingTips({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'How to save electricity at home during the winter.'"
            buttonText="Get Energy Saving Tips"
            generatePrompt={(p: string) => 
                `You are an energy conservation expert. Provide a list of 5 practical tips for saving energy based on the user's request. Request: "${p}"`
            }
            resultTitle="Energy Saving Tips"
        />
    );
}
