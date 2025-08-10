"use client";
import { TextGenerator } from "./TextGenerator";

export function TextRewriterPro({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Paste the text you want to rewrite here..."
            buttonText="Rewrite Text"
            generatePrompt={(prompt) => 
                `You are an expert editor. Rewrite the following text to improve its clarity, style, and impact. You can rephrase sentences, replace words, and restructure paragraphs, but the core meaning must remain the same. The rewritten text should be in the same language as the original. Text: "${prompt}"`
            }
            resultTitle="Rewritten Text"
        />
    );
}
