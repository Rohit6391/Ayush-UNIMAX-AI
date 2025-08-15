"use client";
import { TextGenerator } from "./TextGenerator";

export function CongratulationsMessageWriter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Congratulations on a new job' or 'on a graduation.'"
            buttonText="Write Message"
            generatePrompt={(prompt) => 
                `You are an enthusiastic writer. Write a short and cheerful message of congratulations for the following achievement. Achievement: "${prompt}"`
            }
            resultTitle="Congratulations Message"
        />
    );
}
