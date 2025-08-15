"use client";
import { TextGenerator } from "./TextGenerator";

export function NicknameMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Generate a cool nickname for someone named Alex who is a fast runner.'"
            buttonText="Make Nickname"
            generatePrompt={(prompt) => 
                `You are a nickname generator. Create 5 fun nicknames based on the following description. Description: "${prompt}"`
            }
            resultTitle="Generated Nicknames"
        />
    );
}
