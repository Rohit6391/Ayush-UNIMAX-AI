"use client";
import { TextGenerator } from "./TextGenerator";

export function YogaFitness({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'How to do the crow pose in yoga' or 'Best exercises for strengthening the core'"
            buttonText="Get Fitness & Yoga Info"
            generatePrompt={(prompt) => 
                `You are a certified yoga and fitness instructor. Provide a clear, safe, and step-by-step guide for the following topic. Include tips for proper form and modifications for different skill levels. Topic: "${prompt}"`
            }
            resultTitle="Yoga & Fitness Guide"
        />
    );
}
