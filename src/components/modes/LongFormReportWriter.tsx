"use client";
import { TextGenerator } from "./TextGenerator";

export function LongFormReportWriter({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Provide a topic and key points for a long-form report. e.g., 'Report on Q3 sales figures. Include regional breakdown and competitor analysis.'"
            buttonText="Write Report"
            generatePrompt={(prompt) => 
                `You are a professional analyst and writer. Generate a comprehensive long-form report based on the provided topic and key points. Structure the report with an introduction, body paragraphs for each key point, and a conclusion. Request: "${prompt}"`
            }
            resultTitle="Long-form Report"
        />
    );
}
