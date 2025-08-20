
"use client";
import { TextGenerator } from "./TextGenerator";

export function EconomyBriefMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A brief on the latest US inflation report.'"
            buttonText="Make Brief"
            generatePrompt={(p: string) => 
                `You are an economist. Write a short, easy-to-understand brief on the following economic topic. Topic: "${p}"`
            }
            resultTitle="Economy Brief"
        />
    );
}
