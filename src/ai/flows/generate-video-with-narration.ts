'use server';

/**
 * @fileOverview An AI agent that generates a video with AI narration from a text prompt or image.
 *
 * - generateVideoWithNarration - A function that handles the video and narration generation.
 * - GenerateVideoWithNarrationInput - The input type for this function.
 * - GenerateVideoWithNarrationOutput - The return type for this function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { generateVideo, GenerateVideoInput } from './video-generator';
import { textToSpeech } from './text-to-speech';

export type GenerateVideoWithNarrationInput = GenerateVideoInput;

const GenerateVideoWithNarrationOutputSchema = z.object({
  videoUrl: z.string().describe('The generated video URL as a data URI.'),
  audioUrl: z.string().describe('The generated audio narration URL as a data URI.'),
});
export type GenerateVideoWithNarrationOutput = z.infer<typeof GenerateVideoWithNarrationOutputSchema>;

export async function generateVideoWithNarration(
  input: GenerateVideoWithNarrationInput
): Promise<GenerateVideoWithNarrationOutput> {
  return generateVideoWithNarrationFlow(input);
}

const generateVideoWithNarrationFlow = ai.defineFlow(
  {
    name: 'generateVideoWithNarrationFlow',
    inputSchema: z.custom<GenerateVideoWithNarrationInput>(),
    outputSchema: GenerateVideoWithNarrationOutputSchema,
  },
  async (input) => {
    
    const narrationText = `Here is a video of: ${input.prompt}`;

    // Generate video and audio in parallel
    const [videoResult, audioResult] = await Promise.all([
        generateVideo(input),
        textToSpeech({ text: narrationText })
    ]);

    if (!videoResult.videoUrl) {
        throw new Error('Video generation failed.');
    }
    if (!audioResult.audioDataUri) {
        throw new Error('Audio generation failed.');
    }

    return {
      videoUrl: videoResult.videoUrl,
      audioUrl: audioResult.audioDataUri,
    };
  }
);
