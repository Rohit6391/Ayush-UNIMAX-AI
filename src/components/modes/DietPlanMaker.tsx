
"use client";
import { TextGenerator } from "./TextGenerator";

export function DietPlanMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A 3-day low-carb diet plan.'"
            buttonText="Make Diet Plan"
            generatePrompt={(prompt) => 
                `You are a dietitian. Create a simple diet plan for one day based on the following request. Include meal suggestions for breakfast, lunch, and dinner. Request: "${prompt}"`
            }
            resultTitle="Diet Plan"
        />
    );
}
