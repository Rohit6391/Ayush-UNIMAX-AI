"use client";
import { TextGenerator } from "./TextGenerator";

export function FestivalGuide({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'What to pack for a multi-day music festival.'"
            buttonText="Get Festival Guide"
            generatePrompt={(p: string) => `You are a festival veteran. Provide a guide with three essential tips for attending a festival, based on the user's request. Request: "${p}"`}
            resultTitle="Festival Guide"
        />
    );
}
