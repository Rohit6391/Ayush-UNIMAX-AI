"use client";
import { TextGenerator } from "./TextGenerator";

export function ConversationalFlowDesigner({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A chatbot to help users book a hotel room' or 'A voice assistant flow for ordering pizza'"
            buttonText="Design Flow"
            generatePrompt={(prompt) => 
                `You are a conversation designer. Create a detailed conversational flow for the following user goal. Outline the user intents, bot responses, and decision branches in a clear, structured format. Goal: "${prompt}"`
            }
            resultTitle="Conversational Flow Design"
        />
    );
}
