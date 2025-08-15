
"use client";
import { TextGenerator } from "./TextGenerator";

export function ConflictIdeaMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A sci-fi story set on Mars' or 'A romance between two rival chefs'"
            buttonText="Suggest Conflict"
            generatePrompt={(prompt) => 
                `You are a creative writer. Suggest three compelling conflicts (internal or external) for a story with the following theme or setting. Theme: "${prompt}"`
            }
            resultTitle="Conflict Ideas"
        />
    );
}

    