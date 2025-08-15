
"use client";
import { TextGenerator } from "./TextGenerator";

export function ChecklistMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide a list of items for a checklist."
            buttonText="Make Checklist"
            generatePrompt={(prompt) => `Create a checklist from the following items: "${prompt}"`}
            resultTitle="Checklist"
        />
    );
}

    