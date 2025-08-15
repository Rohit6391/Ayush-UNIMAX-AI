
"use client";
import { TextUtilities } from "./TextUtilities";

export function LiveStreamTopicGenerator({ mode }: { mode: any }) {
    return (
        <TextUtilities
            mode={mode}
            promptPlaceholder="e.g., 'Live stream ideas for a gaming channel' or 'Topics for a Q&A with a chef'"
            buttonText="Generate Live Stream Topics"
            generatePrompt={(prompt) => `Suggest 5 engaging topics for a live stream based on the following theme or channel type. Theme: "${prompt}"`}
            resultTitle="Live Stream Topics"
        />
    );
}
