"use client";
import { TextGenerator } from "./TextGenerator";

export function DetectiveCaseIdeaMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A locked-room mystery in a modern setting.'"
            buttonText="Make Case Idea"
            generatePrompt={(prompt) => 
                `You are a crime fiction author. Suggest a compelling case for a detective story, including the victim, the main suspects, and a clever clue. Prompt: "${prompt}"`
            }
            resultTitle="Detective Case Idea"
        />
    );
}
