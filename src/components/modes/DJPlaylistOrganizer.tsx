"use client";
import { TextGenerator } from "./TextGenerator";

export function DJPlaylistOrganizer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A playlist for a high-energy workout class' or 'A chill dinner party playlist'"
            buttonText="Organize Playlist"
            generatePrompt={(prompt) => 
                `You are a professional DJ. Suggest an order for a playlist to create a specific mood or energy flow for the following event. Describe the flow (e.g., start slow, build energy, peak, cool down). Event: "${prompt}"`
            }
            resultTitle="Playlist Organization"
        />
    );
}
