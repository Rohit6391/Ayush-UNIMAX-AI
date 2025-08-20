
"use client";
import { TextGenerator } from "./TextGenerator";

export function CleaningChecklistMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A weekly kitchen cleaning checklist' or 'Deep cleaning the bathroom'"
            buttonText="Make Checklist"
            generatePrompt={(p: string) => 
                `You are a professional organizer. Create a detailed cleaning checklist for the following task. Organize the checklist into logical steps or areas. Task: "${p}"`
            }
            resultTitle="Cleaning Checklist"
        />
    );
}
