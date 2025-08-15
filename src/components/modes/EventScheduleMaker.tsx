
"use client";
import { TextGenerator } from "./TextGenerator";

export function EventScheduleMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A schedule for a one-day marketing conference.'"
            buttonText="Make Schedule"
            generatePrompt={(prompt) => 
                `You are an event coordinator. Create a simple, timed schedule or timeline for the following event. Include key activities and breaks. Event: "${prompt}"`
            }
            resultTitle="Event Schedule"
        />
    );
}

    