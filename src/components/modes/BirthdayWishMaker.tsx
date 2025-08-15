"use client";
import { TextGenerator } from "./TextGenerator";

export function BirthdayWishMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A funny birthday wish for a best friend.'"
            buttonText="Make Wish"
            generatePrompt={(prompt) => 
                `You are a friendly writer. Create a short and sweet birthday wish based on the following description. Description: "${prompt}"`
            }
            resultTitle="Birthday Wish"
        />
    );
}
