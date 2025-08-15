"use client";
import { TextGenerator } from "./TextGenerator";

export function MinimalistLivingTips({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'How to start living with less' or 'Tips for a minimalist wardrobe'"
            buttonText="Get Tips"
            generatePrompt={(p: string) => `You are a minimalist lifestyle coach. Provide three practical tips for minimalist living based on the user's request. Request: "${p}"`}
            resultTitle="Minimalist Living Tips"
        />
    );
}
