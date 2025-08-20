"use client";
import { TextGenerator } from "./TextGenerator";

export function SwimmingSafetyGuide({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Safety tips for swimming in the ocean.'"
            buttonText="Get Swimming Safety Guide"
            generatePrompt={(p: string) => 
                `You are a lifeguard. Provide a list of 5 crucial safety tips for swimming. Request: "${p}"`
            }
            resultTitle="Swimming Safety Guide"
        />
    );
}
