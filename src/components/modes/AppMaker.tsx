"use client";

import { Maker } from "./Maker";

export function AppMaker({ mode }: { mode: any }) {
    return (
        <Maker
            mode={mode}
            generatePrompt={(prompt) =>
                `Create a detailed plan for a mobile application based on the following idea: "${prompt}". The plan should include: 1. A list of key features. 2. A suggested technology stack (e.g., React Native, Swift, Kotlin). 3. A basic file structure. 4. A sample code snippet for the main screen in the suggested language. Format the entire response as a single JSON object with two keys: "plan" (containing the markdown-formatted plan) and "explanation" (a one-sentence summary of the app concept).`
            }
            resultTitle="App Plan & Code"
            resultType="code"
            codeLanguage="markdown"
            promptPlaceholder="e.g., A simple to-do list app with cloud sync..."
            showMakerOptions={true}
        />
    );
}
