"use client";
import { TextGenerator } from "./TextGenerator";

export function AiBehaviorModeler({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe the AI agent and its environment. e.g., 'A non-player character (NPC) in a fantasy RPG who is a blacksmith.'"
            buttonText="Model Behavior"
            generatePrompt={(prompt) => 
                `You are a game AI developer. Design a behavior tree or state machine for the following AI agent. Describe its states, transitions, and the actions it would perform in each state. Agent: "${prompt}"`
            }
            resultTitle="AI Behavior Model"
        />
    );
}
