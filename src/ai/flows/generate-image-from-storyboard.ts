
'use server';
/**
 * @fileOverview An AI agent that generates images for each scene of a video storyboard based on the AI-generated 'image_prompt'.
 *
 * - generateImageFromStoryboard - A function that handles the image generation for a video storyboard.
 * - GenerateImageFromStoryboardInput - The input type for the generateImageFromStoryboard function.
 * - GenerateImageFromStoryboardOutput - The return type for the generateImageFromStoryboard function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

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
  return generateImageFromStoryboardFlow(input);
}

const generateImageFromStoryboardFlow = ai.defineFlow(
  {
    name: 'generateImageFromStoryboardFlow',
    inputSchema: GenerateImageFromStoryboardInputSchema,
    outputSchema: GenerateImageFromStoryboardOutputSchema,
  },
  async (input) => {

    const promptItems = [];
    if (input.photoDataUri) {
        promptItems.push({ media: { url: input.photoDataUri } });
    }
    promptItems.push({ text: input.imagePrompt });

    try {
        const {media} = await ai.generate({
          model: 'googleai/gemini-2.0-flash-preview-image-generation',
          prompt: promptItems,
          config: {
            responseModalities: ['TEXT', 'IMAGE'],
          },
        });
        
        if (!media?.url) {
          throw new Error("The AI failed to generate an image from the provided prompt. The model may be unavailable or the prompt may have been blocked.");
        }

        return {imageUrl: media.url};
    } catch(err: any) {
        if (err.message && err.message.includes('429')) {
            throw new Error("You have exceeded your daily API quota for image generation. Please check your plan and billing details, or try again tomorrow.");
        }
        // Re-throw other errors
        throw err;
    }
  }
);
