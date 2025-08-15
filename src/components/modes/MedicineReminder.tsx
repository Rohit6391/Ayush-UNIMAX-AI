
"use client";
import { TextGenerator } from "./TextGenerator";

export function MedicineReminder({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Remind me to take my vitamins every morning.'"
            buttonText="Set Reminder"
            generatePrompt={(prompt) => 
                `You are a reminder service. Create a simple text-based reminder for the following medication. You cannot set a real reminder. Request: "${prompt}"`
            }
            resultTitle="Medicine Reminder"
        />
    );
}
