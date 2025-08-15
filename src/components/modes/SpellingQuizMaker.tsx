"use client";
import { TextGenerator } from "./TextGenerator";

export function SpellingQuizMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Create a spelling quiz with commonly misspelled words for adults'"
            buttonText="Make Quiz"
            generatePrompt={(prompt) => 
                `You are an English teacher. Create a 10-word spelling quiz based on the following request. Provide the list of words and then a separate answer key. Request: "${prompt}"`
            }
            resultTitle="Spelling Quiz"
        />
    );
}
