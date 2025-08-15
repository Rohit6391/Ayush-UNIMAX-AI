"use client";
import { TextGenerator } from "./TextGenerator";

export function MovieReviewMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A review of the movie The Matrix, focusing on its themes and visual effects.'"
            buttonText="Write Movie Review"
            generatePrompt={(prompt) => 
                `You are a film critic. Write a detailed and balanced review for the following movie. Discuss the plot, acting, cinematography, and overall impact. Movie: "${prompt}"`
            }
            resultTitle="Movie Review"
        />
    );
}
