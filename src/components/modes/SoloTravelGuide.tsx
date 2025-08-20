
"use client";
import { TextGenerator } from "./TextGenerator";

export function SoloTravelGuide({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Tips for a first-time solo traveler in Southeast Asia.'"
            buttonText="Get Solo Travel Guide"
            generatePrompt={(p: string) => `You are an experienced solo traveler. Provide three essential tips for solo travel based on the user's request. Focus on safety, meeting people, and logistics. Request: "${p}"`}
            resultTitle="Solo Travel Guide"
        />
    );
}
