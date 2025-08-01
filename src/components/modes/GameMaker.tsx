"use client";

import { Maker } from "./Maker";

export function GameMaker({ mode }: { mode: any }) {
    return (
        <Maker
            mode={mode}
            generatePrompt={(prompt) =>
                `You are an expert game developer specializing in creating single-file HTML5 games.

                **Task**: Generate a complete, single-file HTML game based on the user's idea. The game must be fully playable and self-contained.
                
                **Requirements**:
                1.  **Structure**: The output must be a single, complete HTML file. Start with \`<!DOCTYPE html>\` and end with \`</html>\`.
                2.  **Game Logic**: All game logic must be written in JavaScript within a \`<script>\` tag. Any comments in the code should be in the same language as the user's prompt.
                3.  **Graphics**: Use the HTML Canvas API for all graphics and rendering.
                4.  **Controls**: Implement keyboard or mouse controls for gameplay.
                5.  **Game Loop**: The code must include a standard game loop (e.g., using \`requestAnimationFrame\`) for updating and rendering the game state.
                6.  **Completeness**: The game should be a complete, working example, including a win/loss condition if applicable.
                7.  **Styling**: Use basic CSS in a \`<style>\` tag to center the canvas and give the page a clean, dark background.
                8.  **No Commentary**: The entire response must be ONLY the HTML code. Do not include any explanations, comments, or markdown backticks outside of the code itself.
                
                **User's Game Idea**: "${prompt}"`
            }
            resultTitle="Game Preview"
            resultType="website" 
            promptPlaceholder="e.g., A 'breakout' style paddle and ball game"
            showMakerOptions={true}
        />
    );
}
