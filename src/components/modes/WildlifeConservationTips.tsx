
"use client";
import { TextGenerator } from "./TextGenerator";

export function WildlifeConservationTips({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'How can I help protect local wildlife in my city?'"
            buttonText="Get Conservation Tips"
            generatePrompt={(p: string) => 
                `You are a wildlife conservationist. Suggest three practical ways individuals can help with wildlife conservation based on the user's request. Request: "${p}"`
            }
            resultTitle="Wildlife Conservation Tips"
        />
    );
}
