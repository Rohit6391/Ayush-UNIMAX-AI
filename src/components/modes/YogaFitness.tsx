
"use client";
import { TextGenerator } from "./TextGenerator";

export function YogaFitness({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'How to do the crow pose', 'Best exercises for core strength', or 'Tips for a healthier lifestyle'"
            buttonText="Get Fitness & Yoga Info"
            generatePrompt={(prompt) => 
                `You are a certified yoga and fitness instructor. Provide a clear, safe, and step-by-step guide for the following topic. Include tips for proper form, modifications for different skill levels, and general wellness advice. Topic: "${prompt}"`
            }
            resultTitle="Yoga & Fitness Guide"
        />
    );
}
