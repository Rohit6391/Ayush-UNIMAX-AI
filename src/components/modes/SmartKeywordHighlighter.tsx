"use client";
import { TextGenerator } from "./TextGenerator";

export function SmartKeywordHighlighter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Paste text here to identify and highlight important keywords."
            buttonText="Highlight Keywords"
            generatePrompt={(prompt) => 
                `You are a research assistant. Read the following text and return it with the most important keywords and concepts enclosed in **asterisks for bolding**. Text: "${prompt}"`
            }
            resultTitle="Highlighted Text"
        />
    );
}
