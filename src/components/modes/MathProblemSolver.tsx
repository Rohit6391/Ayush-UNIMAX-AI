"use client";
import { TextGenerator } from "./TextGenerator";

export function MathProblemSolver({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Solve for x: 3x - 7 = 11'"
            buttonText="Solve Problem"
            generatePrompt={(prompt) => 
                `You are a math tutor. Solve the following math problem, showing each step of your work clearly. Problem: "${prompt}"`
            }
            resultTitle="Math Problem Solution"
        />
    );
}
