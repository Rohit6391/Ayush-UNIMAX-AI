"use client";
import { TextGenerator } from "./TextGenerator";

export function CustomerSegmentationMapper({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe your product and target market. e.g., 'A high-end electric bicycle for urban commuters.'"
            buttonText="Map Segments"
            generatePrompt={(prompt) => 
                `You are a marketing expert. Based on the following product and target market, create three distinct customer segments. For each segment, provide a name, key demographics, needs, and motivations. Product: "${prompt}"`
            }
            resultTitle="Customer Segments"
        />
    );
}
