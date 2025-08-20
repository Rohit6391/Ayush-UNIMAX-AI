"use client";
import { TextGenerator } from "./TextGenerator";

export function SocialMediaPostScheduler({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'What is the best time to post on Instagram for a fashion brand?'"
            buttonText="Suggest Times"
            generatePrompt={(p: string) => 
                `You are a social media analyst. Based on general best practices, suggest the top 3 best times of day to post on social media for the following type of business or content. Business/Content: "${p}"`
            }
            resultTitle="Suggested Post Times"
        />
    );
}
