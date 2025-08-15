
"use client";
import { TextGenerator } from "./TextGenerator";

export function MoodJournalPrompter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'I'm feeling happy today' or 'I feel a bit anxious.'"
            buttonText="Get Prompt"
            generatePrompt={(prompt) => 
                `You are a journaling guide. Based on the user's stated mood, provide three thoughtful journal prompts to help them explore their feelings. Mood: "${prompt}"`
            }
            resultTitle="Journal Prompts"
        />
    );
}

    