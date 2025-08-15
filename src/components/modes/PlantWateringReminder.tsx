"use client";
import { TextGenerator } from "./TextGenerator";

export function PlantWateringReminder({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Remind me to water the ferns every 3 days.'"
            buttonText="Set Reminder Plan"
            generatePrompt={(prompt) => 
                `You are a reminder service. Create a plan for a plant watering reminder based on the user's request. You cannot set a real reminder. Request: "${prompt}"`
            }
            resultTitle="Watering Reminder Plan"
        />
    );
}
