"use client";
import { TextGenerator } from "./TextGenerator";

export function AlternateHistoryPlotWriter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a historical divergence point. e.g., 'What if the Roman Empire never fell?'"
            buttonText="Write Plot"
            generatePrompt={(prompt) => 
                `You are a historian and storyteller. Based on the following historical divergence point, create a compelling alternate history plot. Describe the new timeline, the key conflicts, and a potential story that could take place in this new world. Divergence: "${prompt}"`
            }
            resultTitle="Alternate History Plot"
        />
    );
}
