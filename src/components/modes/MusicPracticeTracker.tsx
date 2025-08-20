
"use client";
import { TextGenerator } from "./TextGenerator";

export function MusicPracticeTracker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'I practiced piano for 30 minutes today, focusing on scales.'"
            buttonText="Log Practice"
            generatePrompt={(p: string) => 
                `You are a music journal. Create a log entry for the following music practice session. Include the instrument, duration, and what was practiced. Session: "${p}"`
            }
            resultTitle="Practice Log Entry"
        />
    );
}
