"use client";
import { TextGenerator } from "./TextGenerator";

export function RandomNamePicker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Alice, Bob, Charlie, Diana'"
            buttonText="Pick Random Name"
            generatePrompt={(prompt) => 
                `You are a random name picker. Pick one random name from the following list. List: "${prompt}"`
            }
            resultTitle="Random Name"
        />
    );
}
