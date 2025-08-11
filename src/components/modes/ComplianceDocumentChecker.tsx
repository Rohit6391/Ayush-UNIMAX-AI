"use client";
import { TextGenerator } from "./TextGenerator";

export function ComplianceDocumentChecker({ mode }: { mode: any }) {
    return (
        <TextGenerator
            mode={mode}
            promptPlaceholder="Paste your document text, followed by the compliance standard (e.g., 'Check this against GDPR principles')."
            buttonText="Check Compliance"
            generatePrompt={(prompt) => 
                `You are a compliance AI analyst. Review the following document against the specified compliance standard. Identify potential areas of non-compliance and suggest improvements. IMPORTANT: Include a disclaimer that this is an automated check and not a guarantee of compliance. Document and Standard: "${prompt}"`
            }
            resultTitle="Compliance Check Report"
        />
    );
}
