'use server';

/**
 * @fileOverview An AI agent that translates text from one language to another, with optional text extraction from a file.
 *
 * - translateText - A function that translates the input text.
 * - TranslateTextAIInput - The input type for the translateText function.
 * - TranslateTextAIOutput - The return type for the translateText function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TranslateTextAIInputSchema = z.object({
  text: z.string().optional().describe('The text to translate. Can be empty if a file is provided.'),
  targetLanguage: z.string().describe('The target language for the translation.'),
  sourceLanguage: z.string().optional().describe('The source language of the text. If not provided, it should be auto-detected.'),
  fileDataUri: z.string().optional().describe("An optional file (image or document) to extract text from, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."),
});
export type TranslateTextAIInput = z.infer<typeof TranslateTextAIInputSchema>;

const TranslateTextAIOutputSchema = z.object({
  translation: z.string().describe('The translated text.'),
  detectedSourceLanguage: z.string().optional().describe('The auto-detected source language, if it was not provided in the input.'),
  extractedText: z.string().optional().describe('The text extracted from the provided file, if any.'),
});
export type TranslateTextAIOutput = z.infer<typeof TranslateTextAIOutputSchema>;

export async function translateText(input: TranslateTextAIInput): Promise<TranslateTextAIOutput> {
  return translateTextAIFlow(input);
}

const prompt = ai.definePrompt({
  name: 'translateTextAIPrompt',
  input: {schema: TranslateTextAIInputSchema},
  output: {schema: TranslateTextAIOutputSchema},
  prompt: `You are a professional translator and text extractor.

Your task is to perform two steps:
1.  If a file is provided, extract all text from the file and place it in the 'extractedText' output field.
2.  Translate the provided text (either from the 'text' input field or the text you just extracted) from {{#if sourceLanguage}}{{sourceLanguage}}{{else}}the auto-detected language{{/if}} to {{targetLanguage}}.

**Instructions:**
- If the user provides a file in 'fileDataUri', you MUST first analyze the file and extract its text content. The extracted text should be the source for the translation.
- If no file is provided, use the content of the 'text' field as the source for the translation.
- Your primary output is the translated text in the 'translation' field. Do not include any other commentary in the translation.
- If the source language was not provided, you MUST set the 'detectedSourceLanguage' field in your response to the language you detected.

{{#if fileDataUri}}
File to analyze:
{{media url=fileDataUri}}
{{/if}}

{{#if text}}
Text to translate:
{{{text}}}
{{/if}}`,
});

const translateTextAIFlow = ai.defineFlow(
  {
    name: 'translateTextAIFlow',
    inputSchema: TranslateTextAIInputSchema,
    outputSchema: TranslateTextAIOutputSchema,
  },
  async input => {
    if (!input.text && !input.fileDataUri) {
      throw new Error("Either text or a file must be provided for translation.");
    }
    const {output} = await prompt(input);
    return output!;
  }
);
