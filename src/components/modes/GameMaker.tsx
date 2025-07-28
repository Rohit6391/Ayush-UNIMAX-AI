"use client";

import { Maker } from "./Maker";

export function GameMaker({ mode }: { mode: any }) {
    return (
        <Maker
            mode={mode}
            generatePrompt={(prompt) =>
                `Create a detailed game design document for a game based on the idea: "${prompt}". The document should include: 1. Core gameplay mechanics. 2. The main objective. 3. A description of the player character and abilities. 4. A sample code snippet for the main game loop in JavaScript using the HTML Canvas API. Format the entire response as a single JSON object with two keys: "plan" (containing the markdown-formatted plan) and "explanation" (a one-sentence summary of the game concept).`
            }
            resultTitle="Game Plan & Code"
            resultType="code"
            codeLanguage="markdown"
            promptPlaceholder="e.g., A simple platformer game with a hero collecting coins..."
            showMakerOptions={true}
        />
    );
}
