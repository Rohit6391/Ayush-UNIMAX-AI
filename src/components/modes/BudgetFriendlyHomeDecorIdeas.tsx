"use client";
import { TextGenerator } from "./TextGenerator";

export function BudgetFriendlyHomeDecorIdeas({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Decorating a small living room on a tight budget' or 'DIY decor ideas for a bedroom'"
            buttonText="Get Decor Ideas"
            generatePrompt={(p: string) => 
                `You are a professional interior designer specializing in budget-friendly decor. Suggest three creative and affordable home decor ideas based on the user's request. Include tips on where to find materials or how to create the look for less. Request: "${p}"`
            }
            resultTitle="Budget-Friendly Decor Ideas"
        />
    );
}
