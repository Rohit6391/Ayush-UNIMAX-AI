"use client";
import { TextGenerator } from "./TextGenerator";

export function GameRecommendationList({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Suggest some relaxing simulation games like Stardew Valley.'"
            buttonText="Get Game Recommendations"
            generatePrompt={(p: string) => `You are a video game critic. Suggest three games based on the user's request, and briefly explain why they would like each one. Request: "${p}"`}
            resultTitle="Game Recommendations"
        />
    );
}
