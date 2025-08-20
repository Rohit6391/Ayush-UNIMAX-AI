"use client";
import { TextGenerator } from "./TextGenerator";

export function AppReviewGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A review for a new puzzle game that is fun but has too many ads.'"
            buttonText="Generate App Review"
            generatePrompt={(p: string) => 
                `You are a tech reviewer. Write a balanced and informative review for a mobile app based on the following description. Cover its features, user experience, and pricing. Description: "${p}"`
            }
            resultTitle="App Review"
        />
    );
}
