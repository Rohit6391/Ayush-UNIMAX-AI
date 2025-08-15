"use client";
import { TextGenerator } from "./TextGenerator";

export function ContentCalendarMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A content calendar for a fitness brand on Instagram for one week'"
            buttonText="Make Calendar"
            generatePrompt={(prompt) => 
                `You are a social media manager. Create a simple content calendar for one week based on the user's request. For each day, suggest a post idea and the best time to post. Request: "${prompt}"`
            }
            resultTitle="Content Calendar"
        />
    );
}
