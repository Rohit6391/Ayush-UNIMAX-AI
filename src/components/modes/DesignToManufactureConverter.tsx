"use client";
import { TextGenerator } from "./TextGenerator";

export function DesignToManufactureConverter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Upload a design file to convert it for manufacturing."
            buttonText="Generate Manufacturing Conversion"
            generatePrompt={(prompt) => `Convert a design for manufacturing: "${prompt}"`}
            resultTitle="Generated Manufacturing Conversion"
        />
    );
}
