"use client";

import { Maker } from "./Maker";

export function GameMaker({ mode }: { mode: any }) {
    return (
        <Maker
            mode={mode}
            generatePrompt={(prompt) =>
                `Generate a complete, single-file HTML game based on the following idea. The game logic should be written in JavaScript and use the HTML Canvas API. The entire response must be ONLY the HTML code, including a <canvas> element and all necessary JavaScript within a <script> tag. The response must start with <!DOCTYPE html> and end with </html>. Do not include any markdown backticks. Game Idea: "${prompt}"`
            }
            resultTitle="Game Preview"
            resultType="website" // Changed to 'website' to enable iframe preview
            promptPlaceholder="e.g., A simple platformer game with a hero collecting coins..."
            showMakerOptions={true}
        />
    );
}
