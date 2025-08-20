"use client";
import { TextGenerator } from "./TextGenerator";

export function BudgetTravelTips({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Tips for backpacking through Europe on a budget' or 'How to find cheap flights'"
            buttonText="Get Budget Travel Tips"
            generatePrompt={(p: string) => `You are a seasoned budget traveler. Provide three practical and effective tips for the following travel scenario, focusing on saving money without sacrificing experience. Scenario: "${p}"`}
            resultTitle="Budget Travel Tips"
        />
    );
}
