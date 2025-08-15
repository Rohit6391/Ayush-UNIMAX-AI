"use client";
import { TextGenerator } from "./TextGenerator";

export function FishingTipGiver({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Tips for beginner trout fishing' or 'Best lures for bass in the summer'"
            buttonText="Get Tips"
            generatePrompt={(prompt) => 
                `You are an expert angler. Provide three practical and effective fishing tips for the following situation. Situation: "${prompt}"`
            }
            resultTitle="Fishing Tips"
        />
    );
}
