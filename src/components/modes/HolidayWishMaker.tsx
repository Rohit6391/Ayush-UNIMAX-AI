"use client";
import { TextGenerator } from "./TextGenerator";

export function HolidayWishMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A cheerful Christmas wish for a family member.'"
            buttonText="Make Wish"
            generatePrompt={(prompt) => 
                `You are a festive writer. Create a warm and cheerful holiday wish for the following occasion. Occasion: "${prompt}"`
            }
            resultTitle="Holiday Wish"
        />
    );
}
