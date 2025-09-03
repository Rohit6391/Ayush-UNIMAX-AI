
'use server';
/**
 * @fileOverview An AI agent that generates images for each scene of a video storyboard. This version works entirely offline.
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

// Offline image library
const offlineImageLibrary: Record<string, string> = {
    "cat": "https://picsum.photos/seed/cat/1024/1024",
    "dog": "https://picsum.photos/seed/dog/1024/1024",
    "car": "https://picsum.photos/seed/car/1024/1024",
    "house": "https://picsum.photos/seed/house/1024/1024",
    "tree": "https://picsum.photos/seed/tree/1024/1024",
    "person": "https://picsum.photos/seed/person/1024/1024",
    "city": "https://picsum.photos/seed/city/1024/1024",
    "mountain": "https://picsum.photos/seed/mountain/1024/1024",
    "ocean": "https://picsum.photos/seed/ocean/1024/1024",
    "food": "https://picsum.photos/seed/food/1024/1024",
    "logo": "https://picsum.photos/seed/logo/512/512",
    "abstract": "https://picsum.photos/seed/abstract/1024/1024",
    "space": "https://picsum.photos/seed/space/1024/1024",
    "animal": "https://picsum.photos/seed/animal/1024/1024",
    "flower": "https://picsum.photos/seed/flower/1024/1024",
    "default": "https://picsum.photos/1024/1024"
};

const findImageMatch = (prompt: string): string => {
    const lowerCasePrompt = prompt.toLowerCase();
    for (const key in offlineImageLibrary) {
        if (lowerCasePrompt.includes(key)) {
            return offlineImageLibrary[key];
        }
    }
    return offlineImageLibrary["default"];
}

export async function generateImageFromStoryboard(input: GenerateImageFromStoryboardInput): Promise<GenerateImageFromStoryboardOutput> {
    // This is a simulated offline response.
    await new Promise(resolve => setTimeout(resolve, 250)); // Simulate generation delay

    // If the user uploads a photo to edit, we will return their original photo.
    if (input.photoDataUri) {
        return { imageUrl: input.photoDataUri };
    }

    // Otherwise, find a relevant placeholder from the library.
    const matchedImageUrl = findImageMatch(input.imagePrompt);
    
    return {
        imageUrl: matchedImageUrl
    };
}
