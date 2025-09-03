
'use server';
/**
 * @fileOverview An AI agent that generates images for each scene of a video storyboard based on the AI-generated 'image_prompt'.
 *
 * - generateImageFromStoryboard - A function that handles the image generation for a video storyboard.
 * - GenerateImageFromStoryboardInput - The input type for the generateImageFromStoryboard function.
 * - GenerateImageFromStoryboardOutput - The return type for the generateImageFromStoryboard function.
 */

import { z } from 'genkit';

const GenerateImageFromStoryboardInputSchema = z.object({
  imagePrompt: z.string().describe('A prompt to generate an image for a storyboard scene.'),
  photoDataUri: z.string().optional().describe("An optional photo to edit or use as a base, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."),
});
export type GenerateImageFromStoryboardInput = z.infer<typeof GenerateImageFromStoryboardInputSchema>;

const GenerateImageFromStoryboardOutputSchema = z.object({
  imageUrl: z.string().describe('The generated image URL as a data URI.'),
});
export type GenerateImageFromStoryboardOutput = z.infer<typeof GenerateImageFromStoryboardOutputSchema>;

export async function generateImageFromStoryboard(input: GenerateImageFromStoryboardInput): Promise<GenerateImageFromStoryboardOutput> {
    // This is a simulated offline response.
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay

    // Return a consistent placeholder image for offline mode.
    const placeholderUrl = "https://placehold.co/1024x1024/222/fff.png?text=Offline+Image";
    
    return {
        imageUrl: placeholderUrl
    };
}
