"use client";
import { TextGenerator } from "./TextGenerator";

export function SongLyricStarter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Suggest opening lines for a sad country song about a breakup'"
            buttonText="Generate Lines"
            generatePrompt={(prompt) => 
                `You are a songwriter. Suggest 3 different opening lines (1-2 lines each) for a song based on the following theme or genre: "${prompt}"`
            }
            resultTitle="Song Lyric Starters"
        />
    );
}
