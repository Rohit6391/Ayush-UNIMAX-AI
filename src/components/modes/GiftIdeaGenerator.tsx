
"use client";
import { TextGenerator } from "./TextGenerator";

export function GiftIdeaGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A birthday gift for a friend who loves hiking.'"
            buttonText="Get Gift Ideas"
            generatePrompt={(prompt) => 
                `You are a personal shopper. Suggest three thoughtful gift ideas based on the following description. Description: "${prompt}"`
            }
            resultTitle="Gift Ideas"
        />
    );
}

    