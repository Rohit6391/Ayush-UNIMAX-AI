
"use client";
import { TextGenerator } from "./TextGenerator";

export function LocalBusinessFinder({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Find a local coffee shop near me' or 'Best independent bookstores in my city'"
            buttonText="Find Local Businesses"
            generatePrompt={(p: string) => `You are a local guide AI. Suggest three types of local businesses that would fit the user's request. Do not provide real names or addresses. Request: "${p}"`}
            resultTitle="Local Business Suggestions"
        />
    );
}
