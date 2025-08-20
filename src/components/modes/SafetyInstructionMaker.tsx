"use client";
import { TextGenerator } from "./TextGenerator";

export function SafetyInstructionMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Safety instructions for using a power drill.'"
            buttonText="Make Instructions"
            generatePrompt={(p: string) => 
                `You are a safety expert. Write a list of clear, simple safety instructions for the following activity or tool. Activity/Tool: "${p}"`
            }
            resultTitle="Safety Instructions"
        />
    );
}
