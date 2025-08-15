
"use client";
import { TextGenerator } from "./TextGenerator";

export function EndingSuggestor({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe your story's premise. e.g., 'A group of friends gets lost in a haunted forest...'"
            buttonText="Suggest Endings"
            generatePrompt={(prompt) => 
                `You are a storyteller. Suggest three different possible endings (a happy, a tragic, and a twist ending) for a story with the following premise. Premise: "${prompt}"`
            }
            resultTitle="Story Ending Ideas"
        />
    );
}

    