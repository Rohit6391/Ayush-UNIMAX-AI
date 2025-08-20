
"use client";
import { TextGenerator } from "./TextGenerator";

export function BicycleSafetyGuide({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Essential safety tips for cycling in the city.'"
            buttonText="Get Bicycle Safety Guide"
            generatePrompt={(p: string) => 
                `You are a cycling safety instructor. Provide a list of 5 essential safety tips for riding a bicycle. Request: "${p}"`
            }
            resultTitle="Bicycle Safety Guide"
        />
    );
}
