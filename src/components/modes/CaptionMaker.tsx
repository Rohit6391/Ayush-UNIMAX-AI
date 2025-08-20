"use client";
import { TextUtilities } from "./TextUtilities";

export function CaptionMaker({ mode }: { mode: any }) {
    return (
        <TextUtilities
            mode={mode}
            promptPlaceholder="Describe a photo to create a caption."
            buttonText="Make Caption"
            generatePrompt={(prompt) => `Write a short, engaging caption for a photo of: "${prompt}"`}
            resultTitle="Caption"
        />
    );
}
