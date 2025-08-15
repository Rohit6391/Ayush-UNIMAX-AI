"use client";
import { TextGenerator } from "./TextGenerator";

export function SeriesRecommendationList({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Suggest a TV series for fans of Game of Thrones.'"
            buttonText="Get Series Recommendations"
            generatePrompt={(p: string) => `You are a TV critic. Suggest three TV series based on the user's request, and briefly explain why they would like each one. Request: "${p}"`}
            resultTitle="TV Series Recommendations"
        />
    );
}
