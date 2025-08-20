
"use client";
import { TextGenerator } from "./TextGenerator";

export function BugReportTemplateMaker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="e.g., 'A bug report template for a web application.'"
            buttonText="Make Bug Report Template"
            generatePrompt={(p: string) => 
                `You are a QA engineer. Create a simple but effective bug report template. Include fields for 'Summary', 'Steps to Reproduce', 'Expected Result', and 'Actual Result'. Request: "${p}"`
            }
            resultTitle="Bug Report Template"
        />
    );
}
