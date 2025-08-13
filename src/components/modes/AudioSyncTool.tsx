"use client";
import { TextGenerator } from "./TextGenerator";

export function AudioSyncTool({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Sync a voice-over to an animated explainer video' or 'Match sound effects to a character's actions'"
            buttonText="Get Syncing Plan"
            generatePrompt={(prompt) => 
                `You are a professional video and audio editor. Provide a detailed, step-by-step plan for synchronizing an audio track to a video based on the user's request. Request: "${prompt}"`
            }
            resultTitle="Audio Syncing Plan"
        />
    );
}
