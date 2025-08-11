"use client";
import { TextGenerator } from "./TextGenerator";

export function SmartQuestionAnswerEngine({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Ask a question about any topic."
            buttonText="Get Answer"
            generatePrompt={(prompt) => 
                `You are a knowledgeable and accurate AI assistant. Provide a clear, concise, and factual answer to the following question. If the answer is unknown or requires speculation, state that clearly. Question: "${prompt}"`
            }
            resultTitle="Answer"
        />
    );
}
