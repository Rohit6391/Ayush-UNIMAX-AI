
'use server';

/**
 * @fileOverview This file contains shared Zod schemas and TypeScript types
 * used across different AI flows. It is marked with 'use server' to indicate
 * it's part of the server-side logic but is structured to be safely imported
 * by other server components.
 */

import { z } from 'genkit';
import { availableModels } from '@/lib/models';

// Schema for Chat / Research Assistance
export const ChatResearchAssistanceInputSchema = z.object({
  prompt: z.string().describe('The prompt for the AI to research.'),
  isDeepResearch: z.boolean().describe('Whether to perform deep research or not.'),
  isFunChat: z.boolean().optional().describe('Whether to use a fun, witty, and creative personality.'),
  isStudyMode: z.boolean().optional().describe('Whether to act as a study and learning assistant.'),
  isTranslatorMode: z.boolean().optional().describe('Whether to act as a translator.'),
  targetLanguage: z.string().optional().describe('The target language for translation if translator mode is active.'),
  history: z.array(z.any()).optional().describe('The chat history.'),
  fileDataUri: z.string().optional().describe("An optional file provided by the user, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."),
  model: z.enum(availableModels).optional().describe('The model to use for generation.'),
  memory: z.array(z.string()).optional().describe('A list of facts or memories the AI should be aware of.'),
});
export type ChatResearchAssistanceInput = z.infer<typeof ChatResearchAssistanceInputSchema>;


export const ChatResearchAssistanceOutputSchema = z.object({
  response: z.string().describe('The AI response to the prompt.'),
});
export type ChatResearchAssistanceOutput = z.infer<typeof ChatResearchAssistanceOutputSchema>;


// Schema for Document Creation
export const CreateDocumentFromPromptInputSchema = z.object({
  prompt: z.string().describe('The prompt for generating the document.'),
  fileDataUri: z.string().optional().describe("An optional file (image or document) to extract text from, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."),
  model: z.enum(availableModels).optional().describe('The model to use for generation.'),
  isJsonOutput: z.boolean().optional().describe('Whether the output should be a JSON string.'),
});
export type CreateDocumentFromPromptInput = z.infer<typeof CreateDocumentFromPromptInputSchema>;

export const CreateDocumentFromPromptOutputSchema = z.object({
  document: z.string().describe('The generated document, which could be a raw string or a JSON string.'),
});
export type CreateDocumentFromPromptOutput = z.infer<typeof CreateDocumentFromPromptOutputSchema>;


// Schema for Text Translation
export const TranslateTextAIInputSchema = z.object({
  text: z.string().optional().describe('The text to translate. Can be empty if a file is provided.'),
  targetLanguage: z.string().describe('The target language for the translation.'),
  sourceLanguage: z.string().optional().describe('The source language of the text. If not provided, it should be auto-detected.'),
  fileDataUri: z.string().optional().describe("An optional file (image or document) to extract text from, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."),
  model: z.enum(availableModels).optional().describe('The model to use for generation.'),
});
export type TranslateTextAIInput = z.infer<typeof TranslateTextAIInputSchema>;

export const TranslateTextAIOutputSchema = z.object({
  translation: z.string().describe('The translated text.'),
  detectedSourceLanguage: z.string().optional().describe('The auto-detected source language, if it was not provided in the input.'),
  extractedText: z.string().optional().describe('The text extracted from the provided file, if any.'),
});
export type TranslateTextAIOutput = z.infer<typeof TranslateTextAIOutputSchema>;
