"use client";
import { TextGenerator } from "./TextGenerator";

export function ScenePacingAdjuster({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A chase scene that feels too slow.'"
            buttonText="Adjust Pacing"
            generatePrompt={(prompt) => 
                `You are a film editor. Suggest ways to adjust the pacing of the following scene description. For speeding up, suggest shorter sentences and more action. For slowing down, suggest more detail and introspection. Scene: "${prompt}"`
            }
            resultTitle="Pacing Suggestions"
        />
    );
}
