
"use client";
import { TextGenerator } from "./TextGenerator";

export function HashtagTrendFinder({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Find trending hashtags for #travel' or '#foodie'"
            buttonText="Find Trends"
            generatePrompt={(p: string) => 
                `You are a social media trend analyst. Based on the following topic, list 5 currently trending or popular related hashtags. Topic: "${p}"`
            }
            resultTitle="Trending Hashtags"
        />
    );
}
