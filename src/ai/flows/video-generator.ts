'use server';

/**
 * @fileOverview An AI agent that generates a video from a text prompt or image using Veo.
 *
 * - generateVideo - A function that handles the video generation.
 * - GenerateVideoInput - The input type for the generateVideo function.
 * - GenerateVideoOutput - The return type for the generateVideo function.
 */

import { ai } from '@/ai/genkit';
import { googleAI } from '@genkit-ai/googleai';
import { z } from 'genkit';

const GenerateVideoInputSchema = z.object({
  prompt: z.string().describe('A text prompt to generate a video from.'),
  photoDataUri: z.string().optional().describe("A photo to use as a reference for the video, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."),
  negativePrompt: z.string().optional().describe('A text string that describes anything you want to discourage the model from generating.'),
  allowPersonGeneration: z.boolean().optional().describe('Whether to allow the model to generate videos of people.'),
});
export type GenerateVideoInput = z.infer<typeof GenerateVideoInputSchema>;

const GenerateVideoOutputSchema = z.object({
  videoUrl: z.string().describe('The generated video URL as a data URI.'),
});
export type GenerateVideoOutput = z.infer<typeof GenerateVideoOutputSchema>;

export async function generateVideo(
  input: GenerateVideoInput
): Promise<GenerateVideoOutput> {
  return generateVideoFlow(input);
}

const generateVideoFlow = ai.defineFlow(
  {
    name: 'generateVideoFlow',
    inputSchema: GenerateVideoInputSchema,
    outputSchema: GenerateVideoOutputSchema,
  },
  async (input) => {

    const modelPrompt = input.photoDataUri
      ? [
          { text: input.prompt },
          { media: { url: input.photoDataUri } }
        ]
      : input.prompt;
    
    const config: any = {
      durationSeconds: 5,
      aspectRatio: '16:9',
    };
    if (input.negativePrompt) {
        config.negativePrompt = input.negativePrompt;
    }
    if (input.allowPersonGeneration) {
        config.personGeneration = 'allow_adult';
    } else {
        config.personGeneration = 'dont_allow';
    }


    let { operation } = await ai.generate({
      model: googleAI.model('veo-2.0-generate-001'),
      prompt: modelPrompt,
      config: config,
    });

    if (!operation) {
      throw new Error('Expected the model to return an operation');
    }

    // Wait until the operation completes.
    while (!operation.done) {
      operation = await ai.checkOperation(operation);
      // Sleep for 5 seconds before checking again.
      await new Promise((resolve) => setTimeout(resolve, 5000));
    }

    if (operation.error) {
      throw new Error('failed to generate video: ' + operation.error.message);
    }

    const video = operation.output?.message?.content.find((p) => !!p.media);
    if (!video?.media?.url) {
      throw new Error('Failed to find the generated video');
    }
    
    // Download the video and return it as a data URI
    const fetch = (await import('node-fetch')).default;
    const videoDownloadResponse = await fetch(
      `${video.media.url}&key=${process.env.GEMINI_API_KEY}`
    );
    if (
      !videoDownloadResponse ||
      videoDownloadResponse.status !== 200 ||
      !videoDownloadResponse.body
    ) {
      throw new Error('Failed to fetch video');
    }

    const buffer = await videoDownloadResponse.arrayBuffer();
    const base64 = Buffer.from(buffer).toString('base64');

    return {
      videoUrl: `data:video/mp4;base64,${base64}`,
    };
  }
);
