
"use client";
import { TextGenerator } from "./TextGenerator";

export function AnnouncementWriter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'An announcement about a new company holiday.'"
            buttonText="Write Announcement"
            generatePrompt={(prompt) => 
                `You are a communications manager. Write a clear and professional announcement about the following topic. Topic: "${prompt}"`
            }
            resultTitle="Announcement"
        />
    );
}
