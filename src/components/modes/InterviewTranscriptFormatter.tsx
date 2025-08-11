"use client";
import { TextGenerator } from "./TextGenerator";

export function InterviewTranscriptFormatter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Paste the raw text of an interview transcript here..."
            buttonText="Format Transcript"
            generatePrompt={(prompt) => 
                `You are a professional transcriptionist. Format the following raw interview transcript into a clean, readable document. Clearly label the speakers (e.g., Interviewer, [Name]) and format their dialogue accordingly. Transcript: "${prompt}"`
            }
            resultTitle="Formatted Transcript"
        />
    );
}
