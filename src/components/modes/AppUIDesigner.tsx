"use client";
import { TextGenerator } from "./TextGenerator";

export function AppUIDesigner({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Design the UI for a music player app' or 'Create a user flow for a social media app'"
            buttonText="Generate UI Design Plan"
            generatePrompt={(prompt) => 
                `You are an expert UI/UX designer. Create a detailed design plan for a mobile app based on the user's request. Describe the main screens, user interface elements (buttons, menus, etc.), and the overall user flow. Request: "${prompt}"`
            }
            resultTitle="App UI Design Plan"
        />
    );
}
