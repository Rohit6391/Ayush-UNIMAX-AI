
'use server';

/**
 * @fileOverview An AI agent that generates sound effects from text.
 *
 * - generateSound - A function that handles the sound generation process.
 * - GenerateSoundInput - The input type for the generateSound function.
 * - GenerateSoundOutput - The return type for the generateSound function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { googleAI } from '@genkit-ai/googleai';
import wav from 'wav';

const GenerateSoundInputSchema = z.object({
  prompt: z.string().describe('A text description of the sound to generate (e.g., "ocean waves", "a laser blast").'),
});
export type GenerateSoundInput = z.infer<typeof GenerateSoundInputSchema>;

const GenerateSoundOutputSchema = z.object({
  audioDataUri: z.string().describe('The generated audio as a data URI.'),
});
export type GenerateSoundOutput = z.infer<typeof GenerateSoundOutputSchema>;

export async function generateSound(
  input: GenerateSoundInput
): Promise<GenerateSoundOutput> {
  return generateSoundFlow(input);
}

// Helper to convert PCM buffer to WAV base64
async function toWav(
  pcmData: Buffer,
  channels = 1,
  rate = 24000,
  sampleWidth = 2
): Promise<string> {
  return new Promise((resolve, reject) => {
    const writer = new wav.Writer({
      channels,
      sampleRate: rate,
      bitDepth: sampleWidth * 8,
    });

    const bufs: Buffer[] = [];
    writer.on('error', reject);
    writer.on('data', (d) => bufs.push(d));
    writer.on('end', () => resolve(Buffer.concat(bufs).toString('base64')));

    writer.write(pcmData);
    writer.end();
  });
}

const generateSoundFlow = ai.defineFlow(
  {
    name: 'generateSoundFlow',
    inputSchema: GenerateSoundInputSchema,
    outputSchema: GenerateSoundOutputSchema,
  },
  async (input) => {
    try {
      // The prompt is the sound description itself. The model is smart enough to handle it.
      const { media } = await ai.generate({
        model: googleAI.model('gemini-2.5-flash-preview-tts'),
        config: {
          responseModalities: ['AUDIO'],
        },
        prompt: `Generate a sound effect that perfectly matches the following description: ${input.prompt}`,
      });

      if (!media?.url) {
        throw new Error('No audio data was returned from the model. Please try a different prompt.');
      }

      // Convert the raw PCM data URI to a WAV data URI
      const audioBuffer = Buffer.from(
        media.url.substring(media.url.indexOf(',') + 1),
        'base64'
      );
      const wavBase64 = await toWav(audioBuffer);

      return {
        audioDataUri: 'data:audio/wav;base64,' + wavBase64,
      };
    } catch (err: any) {
        if (err.message && err.message.includes('429 Too Many Requests')) {
            throw new Error('You have exceeded the daily quota for audio generation. Please try again tomorrow.');
        }
        throw new Error(`Failed to generate sound: ${err.message}`);
    }
  }
);
