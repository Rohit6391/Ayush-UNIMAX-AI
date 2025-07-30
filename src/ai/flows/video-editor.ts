'use server';

/**
 * @fileOverview An AI agent that analyzes a video based on a user prompt.
 *
 * - analyzeVideo - A function that handles the video analysis process.
 * - AnalyzeVideoInput - The input type for the analyzeVideo function.
 * - AnalyzeVideoOutput - The return type for the analyzeVideo function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AnalyzeVideoInputSchema = z.object({
  videoDataUri: z
    .string()
    .describe(
      "The first frame of a video, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  prompt: z.string().describe('Instructions on how to analyze or what to suggest for the video.'),
});
export type AnalyzeVideoInput = z.infer<typeof AnalyzeVideoInputSchema>;

const AnalyzeVideoOutputSchema = z.object({
  analysis: z.string().describe('The AI\'s analysis and suggestions for the video.'),
});
export type AnalyzeVideoOutput = z.infer<typeof AnalyzeVideoOutputSchema>;

export async function analyzeVideo(input: AnalyzeVideoInput): Promise<AnalyzeVideoOutput> {
  return analyzeVideoFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeVideoPrompt',
  input: { schema: AnalyzeVideoInputSchema },
  output: { schema: AnalyzeVideoOutputSchema },
  prompt: `You are a video editing assistant. Analyze the provided video frame and the user's prompt. 
  
  Based on the user's request, provide a textual analysis. This could be a description of how you would edit the video, suggestions for improvement, or an analysis of the content. You cannot actually edit the video.

  User's Prompt: "{{{prompt}}}"

  Video Frame:
  {{media url=videoDataUri}}`,
});

const analyzeVideoFlow = ai.defineFlow(
  {
    name: 'analyzeVideoFlow',
    inputSchema: AnalyzeVideoInputSchema,
    outputSchema: AnalyzeVideoOutputSchema,
  },
  async input => {
    const { output } = await prompt(input);
    return output!;
  }
);
