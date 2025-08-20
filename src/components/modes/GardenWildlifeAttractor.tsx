
"use client";
import { TextGenerator } from "./TextGenerator";

export function GardenWildlifeAttractor({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'How to attract butterflies to my garden.'"
            buttonText="Get Attraction Tips"
            generatePrompt={(p: string) => 
                `You are a wildlife gardening expert. Provide three tips for attracting specific wildlife to a garden, based on the user's request. Suggest specific plants or features. Request: "${p}"`
            }
            resultTitle="Garden Wildlife Attraction Tips"
        />
    );
}
