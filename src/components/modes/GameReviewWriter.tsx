"use client";
import { TextGenerator } from "./TextGenerator";

export function GameReviewWriter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A review of the game Cyberpunk 2077, focusing on its graphics and story.'"
            buttonText="Write Game Review"
            generatePrompt={(p: string) => 
                `You are a professional game critic. Write a detailed and balanced review for the following game. Discuss the gameplay, graphics, story, and sound design. Game: "${p}"`
            }
            resultTitle="Game Review"
        />
    );
}
