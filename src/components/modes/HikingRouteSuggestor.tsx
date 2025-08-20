"use client";
import { TextGenerator } from "./TextGenerator";

export function HikingRouteSuggestor({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Easy 3-mile hike near a city' or 'Challenging mountain hike with a view'"
            buttonText="Suggest Route"
            generatePrompt={(p: string) => 
                `You are an experienced hiking guide. Suggest a type of hiking trail that would fit the user's request. Describe the ideal terrain, difficulty level, and what sights they might see. Do not suggest specific, real-world trails. Request: "${p}"`
            }
            resultTitle="Hiking Route Suggestion"
        />
    );
}
