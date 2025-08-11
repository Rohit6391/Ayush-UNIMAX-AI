"use client";
import { TextGenerator } from "./TextGenerator";

export function FormalityLevelConverter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Paste your text and specify the conversion. e.g., 'Convert this to a formal email' or 'Make this text more casual.'"
            buttonText="Convert Formality"
            generatePrompt={(prompt) => 
                `You are a professional communicator. Convert the following text between formal and informal styles as requested, while maintaining the original intent. Request: "${prompt}"`
            }
            resultTitle="Converted Text"
        />
    );
}
