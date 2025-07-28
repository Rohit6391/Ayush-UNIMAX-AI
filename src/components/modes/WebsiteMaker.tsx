"use client";

import { Maker } from "./Maker";

export function WebsiteMaker({ mode }: { mode: any }) {
    return (
        <Maker
            mode={mode}
            generatePrompt={(prompt) => 
                `Generate a complete, single-file HTML website based on the following description. The HTML should be fully functional and styled using Tailwind CSS classes (loaded from a CDN: <script src="https://cdn.tailwindcss.com"></script>). Include relevant text and placeholder images (from https://placehold.co). The entire response must be ONLY the HTML code, starting with <!DOCTYPE html> and ending with </html>. Description: "${prompt}"`
            }
            resultTitle="Website Preview"
            resultType="website"
            promptPlaceholder="e.g., A modern landing page for a new coffee shop..."
        />
    );
}
