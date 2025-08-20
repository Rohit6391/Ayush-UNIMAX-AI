
"use client";
import { TextGenerator } from "./TextGenerator";

export function SeasonalActivityGuide({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Fun activities to do in the fall' or 'Best winter holiday destinations'"
            buttonText="Get Seasonal Guide"
            generatePrompt={(p: string) => `You are a lifestyle blogger. Suggest three seasonal activities or destinations based on the user's request. Request: "${p}"`}
            resultTitle="Seasonal Activity Guide"
        />
    );
}
