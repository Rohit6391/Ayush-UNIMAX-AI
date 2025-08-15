
"use client";
import { TextUtilities } from "./TextUtilities";

export function MultiplicationTableMaker({ mode }: { mode: any }) {
    return (
        <TextUtilities
            mode={mode}
            promptPlaceholder="e.g., 'Generate the multiplication table for 7 up to 12'"
            buttonText="Make Table"
            generatePrompt={(prompt) => `Generate the multiplication table for the following number. Number: "${prompt}"`}
            resultTitle="Multiplication Table"
        />
    );
}
