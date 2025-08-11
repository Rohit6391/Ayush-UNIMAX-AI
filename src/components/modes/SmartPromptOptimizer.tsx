"use client";
import { TextGenerator } from "./TextGenerator";

export function SmartPromptOptimizer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Enter a prompt to optimize, e.g., 'write about dogs'"
            buttonText="Optimize Prompt"
            generatePrompt={(prompt) => 
                `You are a prompt engineer. Rewrite the following prompt to be more specific, clear, and effective for a large language model, providing context and constraints to get a better response. Analyze the original prompt and explain your reasoning for the changes. Original prompt: "${prompt}"`
            }
            resultTitle="Optimized Prompt"
        />
    );
}
