"use client";
import { TextGenerator } from "./TextGenerator";

export function CalendarEventFiller({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Team meeting next Monday at 10 AM about Q3 results'"
            buttonText="Generate Event Details"
            generatePrompt={(prompt) => 
                `You are an event coordinator. Generate the details for a calendar event based on the following information. Include a title, date, time, and a brief description. Details: "${prompt}"`
            }
            resultTitle="Calendar Event"
        />
    );
}
