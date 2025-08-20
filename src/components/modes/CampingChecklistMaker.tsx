
"use client";
import { TextGenerator } from "./TextGenerator";

export function CampingChecklistMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A weekend camping trip in the mountains' or 'Beach camping with family'"
            buttonText="Make Checklist"
            generatePrompt={(p: string) => 
                `You are an experienced camper. Create a comprehensive packing checklist for the following camping trip. Organize items into categories like Shelter, Cooking, Clothing, and Essentials. Trip: "${p}"`
            }
            resultTitle="Camping Checklist"
        />
    );
}
