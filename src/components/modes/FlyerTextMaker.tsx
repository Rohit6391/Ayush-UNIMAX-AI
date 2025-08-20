"use client";
import { TextGenerator } from "./TextGenerator";

export function FlyerTextMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Text for a flyer about a local bake sale.'"
            buttonText="Make Flyer Text"
            generatePrompt={(p: string) => 
                `You are a community organizer. Write short and persuasive text for a flyer about the following event. Include a catchy headline and key details. Event: "${p}"`
            }
            resultTitle="Flyer Text"
        />
    );
}
