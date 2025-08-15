"use client";
import { TextGenerator } from "./TextGenerator";

export function RoadTripItineraryMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A 5-day road trip from Los Angeles to San Francisco.'"
            buttonText="Make Road Trip Itinerary"
            generatePrompt={(p: string) => `You are a road trip expert. Create a day-by-day itinerary for the following road trip, including suggested stops, attractions, and driving times. Trip: "${p}"`}
            resultTitle="Road Trip Itinerary"
        />
    );
}
