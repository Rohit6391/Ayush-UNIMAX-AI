
'use server';

/**
 * @fileOverview An AI agent that generates a video from a text prompt.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { googleAI } from '@genkit-ai/googleai';
import { MediaPart } from 'genkit/model';

const GenerateVideoFromPromptInputSchema = z.object({
  prompt: z.string().describe("A text description of the video to generate."),
  photoDataUri: z.string().optional().describe("An optional photo to animate, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."),
});
export type GenerateVideoFromPromptInput = z.infer<typeof GenerateVideoFromPromptInputSchema>;

const GenerateVideoFromPromptOutputSchema = z.object({
    videoUrl: z.string().describe("A data URI of the generated video."),
    contentType: z.string().describe("The content type of the generated video (e.g., video/mp4)."),
});
export type GenerateVideoFromPromptOutput = z.infer<typeof GenerateVideoFromPromptOutputSchema>;


export async function generateVideoFromPrompt(
  input: GenerateVideoFromPromptInput
): Promise<GenerateVideoFromPromptOutput> {
  return generateVideoFromPromptFlow(input);
}

// Helper function to fetch the video and convert it to a data URI
async function videoToDataUri(video: MediaPart): Promise<{ videoUrl: string, contentType: string }> {
    if (!video.media?.url || !process.env.GEMINI_API_KEY) {
        throw new Error('Video URL or API key is missing.');
    }

    // Use dynamic import for node-fetch
    const fetch = (await import('node-fetch')).default;
  
    // Add API key to the download URL
    const videoDownloadUrl = `${video.media.url}&key=${process.env.GEMINI_API_KEY}`;
    
    const response = await fetch(videoDownloadUrl);
    if (!response.ok || !response.body) {
      throw new Error(`Failed to download video: ${response.statusText}`);
    }

    // Get content type from headers, default to video/mp4
    const contentType = response.headers.get('content-type') || 'video/mp4';

    // Read the response body as a buffer
    const videoBuffer = await response.buffer();
    
    // Convert buffer to base64
    const base64Data = videoBuffer.toString('base64');
  
    return {
        videoUrl: `data:${contentType};base64,${base64Data}`,
        contentType: contentType,
    };
  }
  

// The main flow for generating video
const generateVideoFromPromptFlow = ai.defineFlow(
  {
    name: 'generateVideoFromPromptFlow',
    inputSchema: GenerateVideoFromPromptInputSchema,
    outputSchema: GenerateVideoFromPromptOutputSchema,
  },
  async (input) => {
    
    const promptItems: (string | { media: { url: string } } | { text: string })[] = [{ text: input.prompt }];
    if (input.photoDataUri) {
        promptItems.unshift({ media: { url: input.photoDataUri } });
    }

    let { operation } = await ai.generate({
        model: googleAI.model('veo-2.0-generate-001'),
        prompt: input.photoDataUri ? promptItems : input.prompt,
    });
    
    if (!operation) {
        throw new Error('Expected the model to return an operation');
    }

    // Poll the operation until it's done
    // This might take a minute or more.
    while (!operation.done) {
        console.log("Waiting for video generation to complete...");
        await new Promise((resolve) => setTimeout(resolve, 5000)); // Wait 5 seconds
        operation = await ai.checkOperation(operation);
    }
    
    if (operation.error) {
        throw new Error('Failed to generate video: ' + operation.error.message);
    }

    const video = operation.output?.message?.content.find((p) => !!p.media);
    if (!video) {
        throw new Error('Failed to find the generated video in the operation result.');
    }
    
    // Convert the video to a data URI to send to the client
    const { videoUrl, contentType } = await videoToDataUri(video);

    return {
        videoUrl: videoUrl,
        contentType: contentType
    };
  }
);
