"use client";
import { TextGenerator } from "./TextGenerator";

export function GroupTripPlanner({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'How to plan a trip for a group of 10 friends with different budgets.'"
            buttonText="Plan Group Trip"
            generatePrompt={(p: string) => `You are a professional travel agent. Provide a guide with three key tips for planning a successful group trip, focusing on communication, budgeting, and decision-making. Request: "${p}"`}
            resultTitle="Group Trip Planning Guide"
        />
    );
}
