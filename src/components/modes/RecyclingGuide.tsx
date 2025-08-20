
"use client";
import { TextGenerator } from "./TextGenerator";

export function RecyclingGuide({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A quick guide to what can be recycled in a standard city program.'"
            buttonText="Get Recycling Guide"
            generatePrompt={(p: string) => 
                `You are a recycling coordinator. Provide a simple guide to recycling. List common items that are typically recyclable and items that are not. Request: "${p}"`
            }
            resultTitle="Recycling Guide"
        />
    );
}
