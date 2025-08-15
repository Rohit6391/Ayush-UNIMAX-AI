"use client";
import { TextGenerator } from "./TextGenerator";

export function PlaylistNameGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A playlist for a late-night study session'"
            buttonText="Generate Playlist Names"
            generatePrompt={(prompt) => 
                `You are a DJ and music curator. Suggest 10 creative and catchy names for a music playlist with the following theme: "${prompt}"`
            }
            resultTitle="Playlist Name Ideas"
        />
    );
}
