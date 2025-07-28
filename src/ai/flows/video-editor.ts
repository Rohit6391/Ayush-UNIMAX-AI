'use server';

/**
 * @fileOverview An AI agent that edits a video based on a text prompt using Veo.
 *
 * - editVideo - A function that handles the video editing.
 * - EditVideoInput - The input type for the editVideo function.
 * - EditVideoOutput - The return type for the editVideo function.
 */

import { ai } from '@/ai/genkit';
import { googleAI } from '@genkit-ai/googleai';
import { z } from 'genkit';

const EditVideoInputSchema = z.object({
  prompt: z.string().describe('A text prompt describing the desired edits.'),
  videoDataUri: z.string().describe("The video to edit, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."),
});
export type EditVideoInput = z.infer<typeof EditVideoInputSchema>;

const EditVideoOutputSchema = z.object({
  videoUrl: z.string().describe('The edited video URL as a data URI.'),
});
export type EditVideoOutput = z.infer<typeof EditVideoOutputSchema>;

export async function editVideo(
  input: EditVideoInput
): Promise<EditVideoOutput> {
  return editVideoFlow(input);
}

const editVideoFlow = ai.defineFlow(
  {
    name: 'editVideoFlow',
    inputSchema: EditVideoInputSchema,
    outputSchema: EditVideoOutputSchema,
  },
  async (input) => {
    let { operation } = await ai.generate({
      model: googleAI.model('veo-2.0-edit-001'),
      prompt: [
        { text: input.prompt },
        { media: { url: input.videoDataUri, contentType: 'video/mp4' } }
      ],
      config: {
        durationSeconds: 5,
        aspectRatio: '16:9',
      },
    });

    if (!operation) {
      throw new Error('Expected the model to return an operation');
    }

    // Wait until the operation completes.
    while (!operation.done) {
      operation = await ai.checkOperation(operation);
      await new Promise((resolve) => setTimeout(resolve, 5000));
    }

    if (operation.error) {
      throw new Error('failed to edit video: ' + operation.error.message);
    }

    const video = operation.output?.message?.content.find((p) => !!p.media);
    if (!video?.media?.url) {
      throw new Error('Failed to find the edited video');
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
      throw new Error('Failed to fetch edited video');
    }

    const buffer = await videoDownloadResponse.arrayBuffer();
    const base64 = Buffer.from(buffer).toString('base64');

    return {
      videoUrl: `data:video/mp4;base64,${base64}`,
    };
  }
);
