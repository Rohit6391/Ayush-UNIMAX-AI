"use client";
import { TextGenerator } from "./TextGenerator";

export function EnemyBehaviorModeler({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe an enemy to model its behavior."
            buttonText="Generate Enemy Behavior"
            generatePrompt={(prompt) => `Model enemy behavior: "${prompt}"`}
            resultTitle="Generated Enemy Behavior"
        />
    );
}
