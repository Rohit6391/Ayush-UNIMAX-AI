"use client";
import { TextGenerator } from "./TextGenerator";

export function MeetingAgendaMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'a weekly team sync to discuss project progress'"
            buttonText="Make Agenda"
            generatePrompt={(prompt) => 
                `You are an executive assistant. Create a clear and structured agenda for the following meeting. Include topics, estimated time for each topic, and the person leading the discussion. Meeting: "${prompt}"`
            }
            resultTitle="Meeting Agenda"
        />
    );
}
