"use client";
import { TextUtilities } from "./TextUtilities";

export function DivisionStepSolver({ mode }: { mode: any }) {
    return (
        <TextUtilities
            mode={mode}
            promptPlaceholder="e.g., '125 / 5'"
            buttonText="Solve Division"
            generatePrompt={(prompt) => `Solve the following division problem, showing the long division steps clearly. Problem: "${prompt}"`}
            resultTitle="Division Steps"
        />
    );
}
