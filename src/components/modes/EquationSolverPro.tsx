"use client";
import { TextGenerator } from "./TextGenerator";

export function EquationSolverPro({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Enter a mathematical equation to solve. e.g., 'Solve for x: 2x^2 - 5x + 3 = 0'"
            buttonText="Solve Equation"
            generatePrompt={(prompt) => 
                `You are a mathematics professor. Solve the following equation, showing a clear, step-by-step process to arrive at the solution. Equation: "${prompt}"`
            }
            resultTitle="Equation Solution"
        />
    );
}
