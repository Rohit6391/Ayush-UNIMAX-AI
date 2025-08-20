
"use client";
import { TextGenerator } from "./TextGenerator";

export function MusicPlaylistSuggestor({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Create a playlist for a road trip' or 'Music for a rainy day'"
            buttonText="Get Playlist Ideas"
            generatePrompt={(p: string) => `You are a music DJ. Suggest a list of 10 songs that would fit the following playlist theme or mood. Theme/Mood: "${p}"`}
            resultTitle="Music Playlist Suggestions"
        />
    );
}
