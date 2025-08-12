"use client";
import { TextGenerator } from "./TextGenerator";

export function InstrumentArrangementSuggestor({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Describe a song to get instrument arrangement suggestions."
            buttonText="Generate Instrument Arrangement"
            generatePrompt={(prompt) => `Suggest an instrument arrangement: "${prompt}"`}
            resultTitle="Generated Instrument Arrangement"
        />
    );
}
