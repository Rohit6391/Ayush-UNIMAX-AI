
"use client";
import { TextGenerator } from "./TextGenerator";

export function PosterSloganMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Slogans for a school safety poster.'"
            buttonText="Make Slogans"
            generatePrompt={(prompt) => 
                `You are a copywriter. Create three short and catchy slogans for a poster on the following theme. Theme: "${prompt}"`
            }
            resultTitle="Poster Slogans"
        />
    );
}
