"use client";
import { TextUtilities } from "./TextUtilities";

export function BulletPointMaker({ mode }: { mode: any }) {
    return (
        <TextUtilities
            mode={mode}
            promptPlaceholder="Paste a paragraph to convert to bullet points."
            buttonText="Make Bullet Points"
            generatePrompt={(prompt) => `Convert the following paragraph into a bulleted list. Paragraph: "${prompt}"`}
            resultTitle="Bullet Points"
        />
    );
}
