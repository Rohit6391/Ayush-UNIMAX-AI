
'use server';

/**
 * @fileOverview An AI agent that extracts text from a file.
 *
 * - extractTextFromFile - A function that takes a file data URI and returns the text content.
 * - ExtractTextFromFileInput - The input type for the function.
 * - ExtractTextFromFileOutput - The return type for the function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const ExtractTextFromFileInputSchema = z.object({
  fileDataUri: z.string().describe("A file provided by the user, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."),
});
export type ExtractTextFromFileInput = z.infer<typeof ExtractTextFromFileInputSchema>;

const ExtractTextFromFileOutputSchema = z.object({
  text: z.string().describe('The extracted text content from the file.'),
});
export type ExtractTextFromFileOutput = z.infer<typeof ExtractTextFromFileOutputSchema>;


const textExtractorPrompt = ai.definePrompt({
    name: 'textExtractorPrompt',
    input: { schema: z.object({ fileDataUri: z.string() }) },
    output: { schema: ExtractTextFromFileOutputSchema },
    prompt: `You are an expert text extraction agent. Analyze the provided file and extract all textual content from it. Return only the raw text.

    File: {{media url=fileDataUri}}`,
});


export async function extractTextFromFile(
  input: ExtractTextFromFileInput
): Promise<ExtractTextFromFileOutput> {
  return extractTextFromFileFlow(input);
}

const extractTextFromFileFlow = ai.defineFlow(
  {
    name: 'extractTextFromFileFlow',
    inputSchema: ExtractTextFromFileInputSchema,
    outputSchema: ExtractTextFromFileOutputSchema,
  },
  async ({ fileDataUri }) => {
    const { output } = await textExtractorPrompt({ fileDataUri });
    if (!output) {
        throw new Error("The AI failed to extract text from the provided file.");
    }
    return output;
  }
);
