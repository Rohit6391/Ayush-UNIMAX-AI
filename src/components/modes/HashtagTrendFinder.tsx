"use client";
import { TextGenerator } from "./TextGenerator";

export function HashtagTrendFinder({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Find trending hashtags for #travel' or '#foodie'"
            buttonText="Find Trends"
            generatePrompt={(prompt) => 
                `You are a social media trend analyst. Based on the following topic, list 5 currently trending or popular related hashtags. Topic: "${prompt}"`
            }
            resultTitle="Trending Hashtags"
        />
    );
}
