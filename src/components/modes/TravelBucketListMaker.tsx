
"use client";
import { TextGenerator } from "./TextGenerator";

export function TravelBucketListMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Create a travel bucket list for someone who loves nature and hiking.'"
            buttonText="Make Travel List"
            generatePrompt={(p: string) => `You are a world traveler. Suggest 10 dream destinations for a travel bucket list, based on the user's interests. Interests: "${p}"`}
            resultTitle="Travel Bucket List"
        />
    );
}
