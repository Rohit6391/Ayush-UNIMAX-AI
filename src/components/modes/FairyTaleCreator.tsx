"use client";
import { TextGenerator } from "./TextGenerator";

export function FairyTaleCreator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A fairy tale about a princess who saves herself.'"
            buttonText="Create Fairy Tale"
            generatePrompt={(prompt) => 
                `You are a teller of classic fairy tales. Write a short fairy tale in a traditional style, including classic elements like magic and a clear moral. Prompt: "${prompt}"`
            }
            resultTitle="Fairy Tale"
        />
    );
}
