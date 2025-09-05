
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
import { ModelId, availableModels } from '@/lib/models';
import { googleAI } from '@genkit-ai/googleai';

const TranslateTextAIInputSchema = z.object({
  text: z.string().optional().describe('The text to translate. Can be empty if a file is provided.'),
  targetLanguage: z.string().describe('The target language for the translation.'),
  sourceLanguage: z.string().optional().describe('The source language of the text. If not provided, it should be auto-detected.'),
  fileDataUri: z.string().optional().describe("An optional file (image or document) to extract text from, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."),
  model: z.enum(availableModels).optional().describe('The model to use for generation.'),
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
  prompt: `You are a professional translator and text extractor. Your single most important task is to translate text accurately.

**Instructions:**

1.  **Determine Source Text**:
    *   If a file is provided in \`fileDataUri\`, you MUST first analyze the file and extract its text content. This extracted text is your source for translation. Place the extracted text in the 'extractedText' output field.
    *   If no file is provided, you MUST use the content of the 'text' input field as the source for translation.

2.  **Translate**:
    *   You MUST translate the source text from {{#if sourceLanguage}}{{sourceLanguage}}{{else}}the auto-detected language{{/if}} into **{{targetLanguage}}**.
    *   The translation MUST be the only content in the 'translation' output field. Do not add any extra commentary, greetings, or explanations to the translation itself.

3.  **Detect Language (If Necessary)**:
    *   If the \`sourceLanguage\` was not provided in the input, you MUST identify the language of the source text and set the 'detectedSourceLanguage' field in your response.

**Source File to Analyze (if provided):**
{{#if fileDataUri}}
{{media url=fileDataUri}}
{{/if}}

**Source Text to Translate (if no file):**
{{#if text}}
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
    const {output} = await prompt(input, {model: input.model ? googleAI.model(input.model) : undefined});
    if (!output) {
        throw new Error("The AI failed to generate a response.");
    }
    return output;
  }
);
