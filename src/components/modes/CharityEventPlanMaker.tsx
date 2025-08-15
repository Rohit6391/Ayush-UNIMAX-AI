"use client";
import { TextGenerator } from "./TextGenerator";

export function CharityEventPlanMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A plan for a charity bake sale to support a local animal shelter.'"
            buttonText="Create Event Plan"
            generatePrompt={(prompt) => 
                `You are a professional event planner. Create a detailed plan for the following charity event. Include steps for planning, promotion, and execution. Event: "${prompt}"`
            }
            resultTitle="Charity Event Plan"
        />
    );
}
