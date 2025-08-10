"use client";
import { TextGenerator } from "./TextGenerator";

export function ConflictPlotGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A detective discovers their partner is corrupt' or 'Two best friends fall in love with the same person'"
            buttonText="Generate Plot Conflict"
            generatePrompt={(prompt) => 
                `You are a master storyteller and author. Take the following core conflict and expand it into a compelling plot outline with rising action, a climax, and potential resolutions. Core Conflict: "${prompt}"`
            }
            resultTitle="Generated Plot"
        />
    );
}
