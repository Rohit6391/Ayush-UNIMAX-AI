"use client";
import { TextUtilities } from "./TextUtilities";

export function CsvToTableFormatter({ mode }: { mode: any }) {
    return (
        <TextUtilities
            mode={mode}
            promptPlaceholder="e.g., 'Name,Age,City\nJohn,30,New York\nJane,25,London'"
            buttonText="Format CSV to Table"
            generatePrompt={(prompt) => `Format the following CSV data into a clean, human-readable table. CSV: "${prompt}"`}
            resultTitle="Formatted Table"
        />
    );
}
