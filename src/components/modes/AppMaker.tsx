"use client";

import { Maker } from "./Maker";

export function AppMaker({ mode }: { mode: any }) {
    return (
        <Maker
            mode={mode}
            generatePrompt={(prompt) =>
                `You are an expert web developer specializing in creating realistic, single-file HTML mobile app simulations.
                
                **Task**: Generate a complete, single-file HTML web application that realistically simulates a mobile app based on the user's idea.
                
                **Requirements**:
                1.  **Structure**: The output must be a single, complete HTML file. Start with \`<!DOCTYPE html>\` and end with \`</html>\`.
                2.  **Styling**: Use Tailwind CSS classes for all styling. Load Tailwind via the CDN (\`<script src="https://cdn.tailwindcss.com"></script>\`).
                3.  **Phone Screen Simulation**: The app's content must be contained within a centered, phone-shaped container with a black or dark gray border to simulate a smartphone.
                4.  **Interactivity**: Include JavaScript within a \`<script>\` tag to make the app interactive and functional. This should not be just a static page. Implement features like button clicks, form submissions (simulated), tab switching, or other dynamic elements relevant to the app idea.
                5.  **Placeholders**: Use high-quality placeholder images from \`https://placehold.co/<width>x<height>.png\` where needed.
                6.  **Content**: Populate the app with realistic-looking text, buttons, and UI elements that match the app's purpose. The text content should be in the same language as the user's prompt.
                7.  **No Commentary**: The entire response must be ONLY the HTML code. Do not include any explanations, comments, or markdown backticks.
                
                **User's App Idea**: "${prompt}"`
            }
            resultTitle="App Preview"
            resultType="website" 
            promptPlaceholder="e.g., A sleek weather app with a 5-day forecast"
            showMakerOptions={true}
        />
    );
}
