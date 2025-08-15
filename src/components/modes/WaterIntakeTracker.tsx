
"use client";
import { TextGenerator } from "./TextGenerator";

export function WaterIntakeTracker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'I need to drink 8 glasses of water a day.'"
            buttonText="Set Up Tracker"
            generatePrompt={(prompt) => 
                `You are a health assistant. Create a simple text-based plan to help the user track their water intake goal. Suggest reminders or a simple checklist format. Goal: "${prompt}"`
            }
            resultTitle="Water Intake Plan"
        />
    );
}

    