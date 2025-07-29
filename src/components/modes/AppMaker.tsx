"use client";

import { Maker } from "./Maker";

export function AppMaker({ mode }: { mode: any }) {
    return (
        <Maker
            mode={mode}
            generatePrompt={(prompt) =>
                `Generate a complete, single-file HTML web application that simulates a mobile app based on the following idea. The output should be a single HTML file that uses Tailwind CSS for styling and includes JavaScript for interactivity to mimic the app's functionality. The app should look like it's on a phone screen. Use placeholder images from https://placehold.co where necessary. The entire response must be ONLY the HTML code, starting with <!DOCTYPE html> and ending with </html>. Do not include any markdown backticks. App Idea: "${prompt}"`
            }
            resultTitle="App Preview"
            resultType="website" // Changed to 'website' to enable iframe preview
            promptPlaceholder="e.g., A photo-sharing app with a simple feed..."
            showMakerOptions={true}
        />
    );
}
