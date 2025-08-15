
"use client";
import { TextGenerator } from "./TextGenerator";

export function MindMapCreator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'The main themes of the book I'm writing.'"
            buttonText="Create Mind Map"
            generatePrompt={(prompt) => 
                `You are a brainstorming assistant. Create a simple, text-based mind map for the following central idea. Use indentation to show branches and sub-points. Idea: "${prompt}"`
            }
            resultTitle="Mind Map"
        />
    );
}

    