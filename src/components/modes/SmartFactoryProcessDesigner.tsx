"use client";
import { TextGenerator } from "./TextGenerator";

export function SmartFactoryProcessDesigner({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe your goals to design a smart factory process."
            buttonText="Generate Smart Factory Design"
            generatePrompt={(prompt) => `Design a smart factory process: "${prompt}"`}
            resultTitle="Generated Smart Factory Design"
        />
    );
}
