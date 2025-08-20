"use client";
import { TextGenerator } from "./TextGenerator";

export function EmergencyContactListMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'An emergency contact list for a family.'"
            buttonText="Make Contact List"
            generatePrompt={(p: string) => 
                `You are a personal organizer. Create a template for an emergency contact list. Include fields for Police, Fire, Ambulance, Poison Control, and personal contacts. Request: "${p}"`
            }
            resultTitle="Emergency Contact List"
        />
    );
}
