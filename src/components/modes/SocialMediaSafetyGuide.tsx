"use client";
import { TextGenerator } from "./TextGenerator";

export function SocialMediaSafetyGuide({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Tips for keeping my Instagram account private.'"
            buttonText="Get Safety Guide"
            generatePrompt={(p: string) => 
                `You are an online safety expert. Create a guide with 5 tips for staying safe on social media, based on the following request. Request: "${p}"`
            }
            resultTitle="Social Media Safety Guide"
        />
    );
}
