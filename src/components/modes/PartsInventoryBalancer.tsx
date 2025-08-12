"use client";
import { TextGenerator } from "./TextGenerator";

export function PartsInventoryBalancer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide parts inventory data to balance levels."
            buttonText="Generate Inventory Balance"
            generatePrompt={(prompt) => `Balance parts inventory: "${prompt}"`}
            resultTitle="Generated Inventory Balance"
        />
    );
}
