"use client";
import { TextGenerator } from "./TextGenerator";

export function GardeningTipGiver({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'How to grow tomatoes in a small space' or 'Tips for beginner gardeners'"
            buttonText="Get Gardening Tips"
            generatePrompt={(prompt) => 
                `You are an expert gardener. Provide three practical and helpful tips for the following gardening query. Query: "${prompt}"`
            }
            resultTitle="Gardening Tips"
        />
    );
}
