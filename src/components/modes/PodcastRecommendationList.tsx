"use client";
import { TextGenerator } from "./TextGenerator";

export function PodcastRecommendationList({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Podcasts about true crime' or 'Podcasts for learning history'"
            buttonText="Get Recommendations"
            generatePrompt={(p: string) => `You are a podcast critic. Suggest three popular and well-regarded podcasts based on the following topic or genre. Topic/Genre: "${p}"`}
            resultTitle="Podcast Recommendations"
        />
    );
}
