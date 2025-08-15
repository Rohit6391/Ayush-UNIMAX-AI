"use client";
import { TextGenerator } from "./TextGenerator";

export function LanguagePracticePartner({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Practice ordering food in a French cafe'"
            buttonText="Start Practice"
            generatePrompt={(prompt) => 
                `You are a language practice partner. Simulate a basic conversation for the following scenario. You will play the part of the other person, and wait for the user to respond. Scenario: "${prompt}" Start with your first line.`
            }
            resultTitle="Conversation Practice"
        />
    );
}
