
"use client";
import { TextGenerator } from "./TextGenerator";

export function MovieRecommendationList({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Suggest some mind-bending sci-fi movies like Inception.'"
            buttonText="Get Movie Recommendations"
            generatePrompt={(p: string) => `You are a film critic. Suggest three movies based on the user's request, and briefly explain why they would like each one. Request: "${p}"`}
            resultTitle="Movie Recommendations"
        />
    );
}
