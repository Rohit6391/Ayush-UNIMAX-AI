"use client";
import { TextGenerator } from "./TextGenerator";

export function MultilingualSynonymFinder({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Enter a word and the target languages. e.g., 'Happy in Spanish and French'"
            buttonText="Find Synonyms"
            generatePrompt={(prompt) => 
                `You are a linguist and translator. For the given word, provide 5 synonyms in each of the specified target languages. Request: "${prompt}"`
            }
            resultTitle="Multilingual Synonyms"
        />
    );
}
