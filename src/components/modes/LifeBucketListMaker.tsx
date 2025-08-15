"use client";
import { TextGenerator } from "./TextGenerator";

export function LifeBucketListMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'I want to create a bucket list of life goals.'"
            buttonText="Make Bucket List"
            generatePrompt={(p: string) => `You are an inspirational coach. Suggest 10 exciting and achievable life goals for a bucket list, based on the user's general request. Request: "${p}"`}
            resultTitle="Life Bucket List Ideas"
        />
    );
}
