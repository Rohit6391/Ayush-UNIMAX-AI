"use client";
import { TextGenerator } from "./TextGenerator";

export function HelpArticleWriter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'How to reset your password in our app.'"
            buttonText="Write Help Article"
            generatePrompt={(prompt) => 
                `You are a technical support writer. Write a clear, step-by-step help article to guide a user through the following process. Process: "${prompt}"`
            }
            resultTitle="Help Article"
        />
    );
}
