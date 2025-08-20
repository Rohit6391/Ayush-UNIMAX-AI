"use client";
import { TextUtilities } from "./TextUtilities";

export function NumberBaseConverter({ mode }: { mode: any }) {
    return (
        <TextUtilities
            mode={mode}
            promptPlaceholder="e.g., 'Convert 25 from base 10 to base 2'"
            buttonText="Convert Number Base"
            generatePrompt={(prompt) => `Perform the following number base conversion. Show the steps. Conversion: "${prompt}"`}
            resultTitle="Number Base Conversion"
        />
    );
}
