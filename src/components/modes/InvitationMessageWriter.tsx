
"use client";
import { TextGenerator } from "./TextGenerator";

export function InvitationMessageWriter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'An invitation for a casual backyard BBQ.'"
            buttonText="Write Message"
            generatePrompt={(prompt) => 
                `You are an event host. Write a short, friendly, and informative invitation message for the following event. Include the essential details (what, where, when). Event: "${prompt}"`
            }
            resultTitle="Invitation Message"
        />
    );
}

    