
"use client";
import { TextGenerator } from "./TextGenerator";

export function UpcyclingProjectIdeas({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Upcycling ideas for old glass jars' or 'What to do with old t-shirts'"
            buttonText="Get Upcycling Ideas"
            generatePrompt={(p: string) => `You are a creative crafter. Suggest three creative and practical upcycling projects for the following item(s). Item(s): "${p}"`}
            resultTitle="Upcycling Project Ideas"
        />
    );
}
