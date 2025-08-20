
"use client";
import { TextGenerator } from "./TextGenerator";

export function TravelItineraryMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A 7-day trip to Japan, focusing on Tokyo and Kyoto.'"
            buttonText="Make Itinerary"
            generatePrompt={(p: string) => 
                `You are a professional travel agent. Create a detailed day-by-day itinerary for the following trip. Include suggestions for activities, transportation, and dining. Trip: "${p}"`
            }
            resultTitle="Travel Itinerary"
        />
    );
}
