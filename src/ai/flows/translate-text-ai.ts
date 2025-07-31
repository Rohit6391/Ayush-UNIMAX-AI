'use server';

/**
 * @fileOverview An AI agent that translates text from one language to another.
 *
 * - translateText - A function that translates the input text.
 * - TranslateTextAIInput - The input type for the translateText function.
 * - TranslateTextAIOutput - The return type for the translateText function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TranslateTextAIInputSchema = z.object({
  text: z.string().describe('The text to translate.'),
  targetLanguage: z.string().describe('The target language for the translation.'),
  sourceLanguage: z.string().optional().describe('The source language of the text. If not provided, it should be auto-detected.'),
});
export type TranslateTextAIInput = z.infer<typeof TranslateTextAIInputSchema>;

const TranslateTextAIOutputSchema = z.object({
  translation: z.string().describe('The translated text.'),
  detectedSourceLanguage: z.string().optional().describe('The auto-detected source language, if it was not provided in the input.'),
});
export type TranslateTextAIOutput = z.infer<typeof TranslateTextAIOutputSchema>;

export async function translateText(input: TranslateTextAIInput): Promise<TranslateTextAIOutput> {
  return translateTextAIFlow(input);
}

const prompt = ai.definePrompt({
  name: 'translateTextAIPrompt',
  input: {schema: TranslateTextAIInputSchema},
  output: {schema: TranslateTextAIOutputSchema},
  prompt: `You are a professional translator. 
  
  Translate the following text from {{#if sourceLanguage}}{{sourceLanguage}}{{else}}the auto-detected language{{/if}} to {{targetLanguage}}.
  
  - If the source language was not provided, you MUST set the 'detectedSourceLanguage' field in your response to the language you detected.
  - Your response must ONLY be the translated text in the 'translation' field. Do not include any other commentary.

Text to translate:
{{{text}}}`,
});

const translateTextAIFlow = ai.defineFlow(
  {
    name: 'translateTextAIFlow',
    inputSchema: TranslateTextAIInputSchema,
    outputSchema: TranslateTextAIOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
