"use client";
import { TextGenerator } from "./TextGenerator";

export function TravelPlanner({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A 5-day trip to Paris for a couple on a budget'..."
            buttonText="Plan Trip"
            generatePrompt={(prompt) => `Create a detailed travel itinerary for the following trip: ${prompt}. Include suggestions for accommodations, activities for each day, and dining options. The itinerary should be in the same language as the prompt.`}
            resultTitle="Travel Itinerary"
        />
    );
}
