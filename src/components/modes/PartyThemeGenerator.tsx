
"use client";
import { TextGenerator } from "./TextGenerator";

export function PartyThemeGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A 30th birthday party in the summer.'"
            buttonText="Suggest Themes"
            generatePrompt={(prompt) => 
                `You are an event planner. Suggest three creative and fun party themes for the following occasion. Occasion: "${prompt}"`
            }
            resultTitle="Party Themes"
        />
    );
}

    