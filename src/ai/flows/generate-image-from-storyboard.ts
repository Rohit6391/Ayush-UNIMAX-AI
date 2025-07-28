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
});
export type GenerateImageFromStoryboardInput = z.infer<typeof GenerateImageFromStoryboardInputSchema>;

const GenerateImageFromStoryboardOutputSchema = z.object({
  imageUrl: z.string().describe('The generated image URL as a data URI.'),
});
export type GenerateImageFromStoryboardOutput = z.infer<typeof GenerateImageFromStoryboardOutputSchema>;

export async function generateImageFromStoryboard(input: GenerateImageFromStoryboardInput): Promise<GenerateImageFromStoryboardOutput> {
  return generateImageFromStoryboardFlow(input);
}

const generateImageFromStoryboardPrompt = ai.definePrompt({
  name: 'generateImageFromStoryboardPrompt',
  input: {schema: GenerateImageFromStoryboardInputSchema},
  output: {schema: GenerateImageFromStoryboardOutputSchema},
  prompt: `Generate an image based on the following prompt:\n\n{{imagePrompt}}`,
});

const generateImageFromStoryboardFlow = ai.defineFlow(
  {
    name: 'generateImageFromStoryboardFlow',
    inputSchema: GenerateImageFromStoryboardInputSchema,
    outputSchema: GenerateImageFromStoryboardOutputSchema,
  },
  async input => {
    const {media} = await ai.generate({
      model: 'googleai/gemini-2.0-flash-preview-image-generation',
      prompt: input.imagePrompt,
      config: {
        responseModalities: ['TEXT', 'IMAGE'],
      },
    });

    return {imageUrl: media!.url!};
  }
);
