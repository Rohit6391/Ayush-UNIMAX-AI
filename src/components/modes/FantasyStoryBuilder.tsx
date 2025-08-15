"use client";
import { TextGenerator } from "./TextGenerator";

export function FantasyStoryBuilder({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A young farmhand discovers they have magic powers.'"
            buttonText="Build Fantasy Story"
            generatePrompt={(prompt) => 
                `You are a fantasy author. Suggest key elements for a fantasy story based on the prompt, including a magic system, a unique world feature, and a potential quest. Prompt: "${prompt}"`
            }
            resultTitle="Fantasy Story Elements"
        />
    );
}
