
"use client";
import { TextGenerator } from "./TextGenerator";

export function BirdWatchingGuide({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Tips for identifying sparrows' or 'What to bring on a bird watching trip'"
            buttonText="Get Guide"
            generatePrompt={(p: string) => 
                `You are an ornithologist. Provide three clear and helpful bird identification tips or pieces of advice based on the user's request. Request: "${p}"`
            }
            resultTitle="Bird Watching Guide"
        />
    );
}
