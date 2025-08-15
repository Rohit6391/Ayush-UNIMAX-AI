"use client";
import { TextGenerator } from "./TextGenerator";

export function GeometryShapeDrawer({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Draw an isosceles triangle with labels'"
            buttonText="Generate Diagram"
            generatePrompt={(prompt) => 
                `You are a geometry tool. Create a text-based ASCII art diagram for the following shape. Include labels if requested. Shape: "${prompt}"`
            }
            resultTitle="Shape Diagram"
        />
    );
}
