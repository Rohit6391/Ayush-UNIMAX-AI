"use client";
import { TextGenerator } from "./TextGenerator";

export function GuestSpeakerFinderAi({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe your event and topic to find guest speakers."
            buttonText="Generate Speaker Suggestions"
            generatePrompt={(prompt) => `Find guest speakers: "${prompt}"`}
            resultTitle="Generated Speaker Suggestions"
        />
    );
}
