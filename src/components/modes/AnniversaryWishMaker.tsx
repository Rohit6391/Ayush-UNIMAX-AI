"use client";
import { TextGenerator } from "./TextGenerator";

export function AnniversaryWishMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A romantic anniversary wish for a partner.'"
            buttonText="Make Wish"
            generatePrompt={(prompt) => 
                `You are a romantic writer. Suggest a heartfelt anniversary wish for the following prompt. Prompt: "${prompt}"`
            }
            resultTitle="Anniversary Wish"
        />
    );
}
