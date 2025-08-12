"use client";
import { TextGenerator } from "./TextGenerator";

export function ChatbotScriptEnhancer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Upload a chatbot script to enhance it."
            buttonText="Generate Enhanced Script"
            generatePrompt={(prompt) => `Enhance a chatbot script: "${prompt}"`}
            resultTitle="Generated Enhanced Script"
        />
    );
}
