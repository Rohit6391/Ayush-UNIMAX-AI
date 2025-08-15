"use client";
import { TextGenerator } from "./TextGenerator";

export function SongChordFinder({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Chords for 'Wonderwall' by Oasis' or 'Simple four-chord pop songs'"
            buttonText="Find Chords"
            generatePrompt={(prompt) => 
                `You are a musician. Provide a simplified chord progression (e.g., G - C - D - Em) for the following song or type of song. Request: "${prompt}"`
            }
            resultTitle="Song Chords"
        />
    );
}
