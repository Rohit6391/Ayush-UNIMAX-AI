
'use server';

/**
 * @fileOverview An AI agent that converts text to speech.
 *
 * - textToSpeech - A function that converts text to an audio data URI.
 * - TextToSpeechInput - The input type for the textToSpeech function.
 * - TextToSpeechOutput - The return type for the textToSpeech function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { googleAI } from '@genkit-ai/googleai';
import wav from 'wav';

const TextToSpeechInputSchema = z.object({
  text: z.string().describe('The text to convert to speech.'),
  language: z.string().optional().describe('The BCP-47 language code for the text (e.g., "en-US", "es-ES"). If not provided, the model will attempt to auto-detect.'),
});
export type TextToSpeechInput = z.infer<typeof TextToSpeechInputSchema>;

const TextToSpeechOutputSchema = z.object({
  audioDataUri: z.string().describe('The generated audio as a data URI.'),
});
export type TextToSpeechOutput = z.infer<typeof TextToSpeechOutputSchema>;

export async function textToSpeech(
  input: TextToSpeechInput
): Promise<TextToSpeechOutput> {
  return textToSpeechFlow(input);
}

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
    writer.on('data', (d) => {
      bufs.push(d);
    });
    writer.on('end', () => {
      resolve(Buffer.concat(bufs).toString('base64'));
    });

    writer.write(pcmData);
    writer.end();
  });
}

const textToSpeechFlow = ai.defineFlow(
  {
    name: 'textToSpeechFlow',
    inputSchema: TextToSpeechInputSchema,
    outputSchema: TextToSpeechOutputSchema,
  },
  async (input) => {
    try {
      const { media } = await ai.generate({
        model: googleAI.model('gemini-2.5-flash-preview-tts'),
        config: {
          responseModalities: ['AUDIO'],
          speechConfig: {
            // If a language is provided, pass it to the API. Otherwise, let the model auto-detect.
            languageCode: input.language,
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: 'Algenib' },
            },
          },
        },
        prompt: input.text,
      });
      if (!media?.url) {
        throw new Error('No audio data was returned from the model.');
      }

      const audioBuffer = Buffer.from(
        media.url.substring(media.url.indexOf(',') + 1),
        'base64'
      );
      const wavBase64 = await toWav(audioBuffer);

      return {
        audioDataUri: 'data:audio/wav;base64,' + wavBase64,
      };
    } catch (err: any) {
        if (err.message && (err.message.includes('429') || err.message.toLowerCase().includes('quota'))) {
            throw new Error('You have exceeded the daily quota for audio generation. Please try again tomorrow.');
        }
        throw new Error(`An unexpected server error occurred: ${err.message}`);
    }
  }
);
