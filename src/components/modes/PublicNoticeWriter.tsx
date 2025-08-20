"use client";
import { TextGenerator } from "./TextGenerator";

export function PublicNoticeWriter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A public notice about upcoming road construction.'"
            buttonText="Write Notice"
            generatePrompt={(p: string) => 
                `You are a municipal clerk. Write a formal public notice about the following issue. Issue: "${p}"`
            }
            resultTitle="Public Notice"
        />
    );
}
