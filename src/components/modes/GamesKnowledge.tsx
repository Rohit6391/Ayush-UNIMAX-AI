"use client";
import { TextGenerator } from "./TextGenerator";

export function GamesKnowledge({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'What are the rules of chess?' or 'Tips for getting started in League of Legends'"
            buttonText="Get Gaming Knowledge"
            generatePrompt={(prompt) => 
                `You are a gaming expert. Provide a clear and comprehensive explanation for the following game-related query. Query: "${prompt}"`
            }
            resultTitle="Gaming Knowledge"
        />
    );
}
