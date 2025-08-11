"use client";
import { TextGenerator } from "./TextGenerator";

export function MultiThreadedStoryPlanner({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe the main characters and their goals. e.g., 'Character A wants to find a lost treasure. Character B wants to stop them.'"
            buttonText="Plan Story"
            generatePrompt={(prompt) => 
                `You are a master plotter. Based on the following characters and goals, create a multi-threaded story plan. Outline how the different plotlines will intersect, climax, and resolve. Characters/Goals: "${prompt}"`
            }
            resultTitle="Multi-threaded Story Plan"
        />
    );
}
