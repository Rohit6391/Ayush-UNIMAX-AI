"use client";
import { TextGenerator } from "./TextGenerator";

export function SongChordFinder({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Chords for 'Wonderwall' by Oasis' or 'Simple four-chord pop songs'"
            buttonText="Find Chords"
            generatePrompt={(p: string) => 
                `You are a musician. Provide a simplified chord progression (e.g., G - C - D - Em) for the following song or type of song. Request: "${p}"`
            }
            resultTitle="Song Chords"
        />
    );
}
