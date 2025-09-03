
'use server';

/**
 * @fileOverview A document creation agent. This is an offline simulation.
 *
 * - createDocumentFromPrompt - A function that handles the document creation process.
 * - CreateDocumentFromPromptInput - The input type for the createDocumentFromPrompt function.
 * - CreateDocumentFromPromptOutput - The return type for the createDocumentFromprompt function.
 */

import {z} from 'genkit';
import { ModelId, availableModels } from '@/lib/models';

const CreateDocumentFromPromptInputSchema = z.object({
  prompt: z.string().describe('The prompt for generating the document.'),
  fileDataUri: z.string().optional().describe("An optional file (image or document) to extract text from, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."),
  model: z.enum(availableModels).optional().describe('The model to use for generation.'),
  isJsonOutput: z.boolean().optional().describe('Whether the output should be a JSON string.'),
});
export type CreateDocumentFromPromptInput = z.infer<typeof CreateDocumentFromPromptInputSchema>;

const CreateDocumentFromPromptOutputSchema = z.object({
  document: z.string().describe('The generated document, which could be a raw string or a JSON string.'),
});
export type CreateDocumentFromPromptOutput = z.infer<typeof CreateDocumentFromPromptOutputSchema>;

export async function createDocumentFromPrompt(input: CreateDocumentFromPromptInput): Promise<CreateDocumentFromPromptOutput> {
    await new Promise(resolve => setTimeout(resolve, 200)); // Simulate processing delay

    let documentContent = `This is an offline-generated document based on your prompt:\n\n---\n\n${input.prompt}\n\n---\n\nThis demonstrates the document creation functionality. For full dynamic content generation, an online connection would be required.`;

    if (input.isJsonOutput) {
        documentContent = JSON.stringify({
            status: "OK",
            prompt: input.prompt,
            message: "This is a simulated JSON response from an offline model.",
            data: {
                exampleKey: "exampleValue",
                items: [1, 2, 3]
            }
        }, null, 2);
    }
    
    if (input.fileDataUri) {
      documentContent = `This document was generated using your prompt and the file you uploaded.\n\n` + documentContent;
    }

    return { document: documentContent };
}

