"use client";
import { TextGenerator } from "./TextGenerator";

export function HikingSafetyGuide({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Safety tips for hiking in the desert.'"
            buttonText="Get Hiking Safety Guide"
            generatePrompt={(p: string) => 
                `You are an experienced hiking guide. Create a list of 5 essential safety tips for the following hiking scenario. Scenario: "${p}"`
            }
            resultTitle="Hiking Safety Guide"
        />
    );
}
