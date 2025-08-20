"use client";
import { TextGenerator } from "./TextGenerator";

export function PhotographyTipGiver({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Tips for taking better portrait photos' or 'How to photograph landscapes'"
            buttonText="Get Tips"
            generatePrompt={(p: string) => 
                `You are a professional photographer. Provide three actionable tips for improving photography in the following area. Area: "${p}"`
            }
            resultTitle="Photography Tips"
        />
    );
}
