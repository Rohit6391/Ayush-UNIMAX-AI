"use client";
import { TextGenerator } from "./TextGenerator";

export function DialogueImprover({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Hello.' 'Hi.' 'How are you?' 'Fine.'"
            buttonText="Improve Dialogue"
            generatePrompt={(prompt) => 
                `You are a script doctor. Rewrite the following dull dialogue to be more engaging and reveal character. Original dialogue: "${prompt}"`
            }
            resultTitle="Improved Dialogue"
        />
    );
}
