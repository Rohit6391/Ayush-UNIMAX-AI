"use client";
import { TextGenerator } from "./TextGenerator";

export function TimeZoneConverter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'What is 3 PM PST in EST?'"
            buttonText="Convert Time Zone"
            generatePrompt={(prompt) => 
                `You are a time zone converter. Perform the following time zone conversion. Conversion: "${prompt}"`
            }
            resultTitle="Time Zone Conversion"
        />
    );
}
