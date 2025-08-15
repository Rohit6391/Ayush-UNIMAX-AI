"use client";
import { TextGenerator } from "./TextGenerator";

export function SuperheroStoryCreator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A hero with the power to control plants.'"
            buttonText="Create Superhero Story"
            generatePrompt={(prompt) => 
                `You are a comic book writer. Suggest a story idea for a superhero, including a cool superhero name, a formidable villain, and a central conflict. Prompt: "${prompt}"`
            }
            resultTitle="Superhero Story Idea"
        />
    );
}
