"use client";
import { TextGenerator } from "./TextGenerator";

export function AudioTranscriptionTool({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe the audio you want to transcribe (e.g., a podcast interview, a meeting recording)."
            buttonText="Generate Transcription"
            generatePrompt={(prompt) => 
                `You are an expert transcriptionist. Based on the following description, provide a highly accurate text transcription. If audio is provided, transcribe it directly. Description: "${prompt}"`
            }
            resultTitle="Audio Transcription"
        />
    );
}
