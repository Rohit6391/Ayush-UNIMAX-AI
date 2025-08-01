"use client";

import { Maker } from "./Maker";

export function WebsiteMaker({ mode }: { mode: any }) {
    return (
        <Maker
            mode={mode}
            generatePrompt={(prompt) => 
                `You are an expert web developer. Your task is to generate a complete, single-file HTML website based on the user's description. The website should be modern, visually appealing, and fully functional.

                **Requirements**:
                1.  **Structure**: The output must be a single, complete HTML file. Start with \`<!DOCTYPE html>\` and end with \`</html>\`.
                2.  **Styling**: Use Tailwind CSS classes for all styling. Load Tailwind via the CDN (\`<script src="https://cdn.tailwindcss.com"></script>\`).
                3.  **Content**: Include relevant, well-written text content. The text should be professional and appropriate for the website's purpose, and in the same language as the user's prompt.
                4.  **Images**: Use high-quality, relevant placeholder images from \`https://placehold.co/<width>x<height>.png\`.
                5.  **Sections**: The website should be well-structured with logical sections (e.g., navbar, hero, features, about, contact, footer).
                6.  **Interactivity**: Add subtle JavaScript for interactivity where appropriate (e.g., smooth scrolling for anchor links, a mobile menu toggle).
                7.  **No Commentary**: The entire response must be ONLY the HTML code. Do not include any explanations, comments, or markdown backticks.
                
                **User's Website Description**: "${prompt}"`
            }
            resultTitle="Website Preview"
            resultType="website"
            promptPlaceholder="e.g., A professional portfolio for a graphic designer"
            showMakerOptions={true}
        />
    );
}
