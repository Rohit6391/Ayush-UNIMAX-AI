"use client";
import { TextGenerator } from "./TextGenerator";

export function ListCreator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'grocery items: milk, bread, eggs' or 'project steps: design, develop, test, deploy'"
            buttonText="Create List"
            generatePrompt={(prompt) => 
                `You are an organizer. Turn the following ideas into an organized, numbered list. Ideas: "${prompt}"`
            }
            resultTitle="Organized List"
        />
    );
}
