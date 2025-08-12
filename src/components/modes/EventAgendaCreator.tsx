"use client";
import { TextGenerator } from "./TextGenerator";

export function EventAgendaCreator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe your event to create a detailed agenda."
            buttonText="Generate Event Agenda"
            generatePrompt={(prompt) => `Create an event agenda: "${prompt}"`}
            resultTitle="Generated Event Agenda"
        />
    );
}
