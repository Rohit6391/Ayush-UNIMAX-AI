"use client";
import { TextGenerator } from "./TextGenerator";

export function SocialMediaPostMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A tweet announcing our new product launch' or 'An Instagram caption for a photo of a sunset'"
            buttonText="Generate Post"
            generatePrompt={(prompt) => 
                `You are a social media marketing expert. Write an engaging social media post based on the following request. Include relevant hashtags and emojis. Request: "${prompt}"`
            }
            resultTitle="Social Media Post"
        />
    );
}