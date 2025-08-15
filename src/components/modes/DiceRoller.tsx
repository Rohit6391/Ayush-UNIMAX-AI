"use client";
import { TextGenerator } from "./TextGenerator";

export function DiceRoller({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Roll two 6-sided dice.'"
            buttonText="Roll Dice"
            generatePrompt={(prompt) => 
                `You are a dice rolling simulator. Simulate the following dice roll and provide the result. Roll: "${prompt}"`
            }
            resultTitle="Dice Roll Result"
        />
    );
}
