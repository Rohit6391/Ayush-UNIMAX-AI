"use client";
import { TextGenerator } from "./TextGenerator";

export function CreativeContentExpander({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'The history of coffee' or 'How black holes are formed'"
            buttonText="Expand Content"
            generatePrompt={(prompt) => 
                `You are a creative writer and expert researcher. Take the following topic and expand it into a detailed, engaging, and well-structured article. Include interesting facts, different perspectives, and a compelling narrative. Topic: "${prompt}"`
            }
            resultTitle="Expanded Content"
        />
    );
}
