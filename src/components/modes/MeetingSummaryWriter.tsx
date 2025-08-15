"use client";
import { TextGenerator } from "./TextGenerator";

export function MeetingSummaryWriter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Paste your raw meeting notes here..."
            buttonText="Write Summary"
            generatePrompt={(prompt) => 
                `You are a project manager. Summarize the following meeting notes into a concise summary. Highlight the key decisions made and the main action items. Notes: "${prompt}"`
            }
            resultTitle="Meeting Summary"
        />
    );
}
