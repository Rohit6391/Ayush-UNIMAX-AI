"use client";
import { TextGenerator } from "./TextGenerator";

export function MeetingNotesFormatter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Paste your raw, messy meeting notes here..."
            buttonText="Format Notes"
            generatePrompt={(prompt) => 
                `You are an expert executive assistant. Take the following raw meeting notes and format them into a clean, professional summary. Identify the key discussion points, decisions made, and a clear list of action items with assigned owners if mentioned. Notes: "${prompt}"`
            }
            resultTitle="Formatted Meeting Notes"
        />
    );
}
