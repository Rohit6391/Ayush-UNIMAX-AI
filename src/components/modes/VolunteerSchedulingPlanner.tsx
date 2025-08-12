"use client";
import { TextGenerator } from "./TextGenerator";

export function VolunteerSchedulingPlanner({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe your event and volunteer needs to get a schedule."
            buttonText="Generate Volunteer Schedule"
            generatePrompt={(prompt) => `Plan a volunteer schedule: "${prompt}"`}
            resultTitle="Generated Volunteer Schedule"
        />
    );
}
