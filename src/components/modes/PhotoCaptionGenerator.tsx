"use client";
import { TextGenerator } from "./TextGenerator";

export function PhotoCaptionGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A photo of a sunset over the ocean' or 'A picture of my dog playing in the park'"
            buttonText="Generate Caption"
            generatePrompt={(p: string) => 
                `You are a social media influencer. Suggest three creative and engaging captions for a photo with the following description. Include relevant hashtags. Description: "${p}"`
            }
            resultTitle="Photo Captions"
        />
    );
}
