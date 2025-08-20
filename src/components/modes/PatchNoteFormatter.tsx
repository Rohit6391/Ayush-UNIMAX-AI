
"use client";
import { TextGenerator } from "./TextGenerator";

export function PatchNoteFormatter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Fixed a bug where the player could get stuck. Nerfed the dragon's fire breath.'"
            buttonText="Format Patch Notes"
            generatePrompt={(p: string) => 
                `You are a community manager for a video game. Format the following list of changes into clear, organized patch notes with categories like 'Bug Fixes' and 'Balance Changes'. Changes: "${p}"`
            }
            resultTitle="Formatted Patch Notes"
        />
    );
}
