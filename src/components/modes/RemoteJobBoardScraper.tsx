"use client";
import { TextGenerator } from "./TextGenerator";

export function RemoteJobBoardScraper({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'Find remote jobs for a graphic designer'"
            buttonText="Find Remote Jobs"
            generatePrompt={(p: string) => `You are a job search assistant. Suggest three popular job boards or websites for finding remote work in the following field. Field: "${p}"`}
            resultTitle="Remote Job Resources"
        />
    );
}
