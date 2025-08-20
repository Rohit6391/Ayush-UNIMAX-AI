
"use client";
import { TextGenerator } from "./TextGenerator";

export function LyricRhymeImprover({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Suggest better rhymes for the line: The sky is so blue, just for me and you.'"
            buttonText="Improve Rhyme"
            generatePrompt={(p: string) => 
                `You are a professional songwriter. For the following lyric, suggest three alternative rhyming lines that are more creative or evocative. Lyric: "${p}"`
            }
            resultTitle="Improved Rhymes"
        />
    );
}
