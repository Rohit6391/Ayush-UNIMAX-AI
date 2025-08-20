
"use client";
import { TextGenerator } from "./TextGenerator";

export function UserFeedbackFormMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A feedback form for a new website feature.'"
            buttonText="Make Feedback Form"
            generatePrompt={(p: string) => 
                `You are a UI/UX researcher. Create a simple user feedback form with 3-5 questions to gather opinions on the following topic. Include at least one open-ended question. Topic: "${p}"`
            }
            resultTitle="User Feedback Form"
        />
    );
}
