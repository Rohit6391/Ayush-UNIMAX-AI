
"use client";
import { TextGenerator } from "./TextGenerator";

export function InfographicIdeaGenerator({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Infographic ideas for the benefits of recycling.'"
            buttonText="Generate Ideas"
            generatePrompt={(p: string) => 
                `You are a graphic designer. Suggest three creative ideas for an infographic on the following topic. Describe the visual layout for each. Topic: "${p}"`
            }
            resultTitle="Infographic Ideas"
        />
    );
}
