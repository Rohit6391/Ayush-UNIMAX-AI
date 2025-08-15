
"use client";
import { TextGenerator } from "./TextGenerator";

export function PlotTwistGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A detective story where the main character is hunting a killer'"
            buttonText="Generate Plot Twist"
            generatePrompt={(prompt) => 
                `You are a master storyteller. Suggest three unexpected and shocking plot twists for a story with the following premise. Premise: "${prompt}"`
            }
            resultTitle="Plot Twists"
        />
    );
}

    