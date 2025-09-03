
'use server';

/**
 * @fileOverview A file editor agent. This is an offline simulation.
 *
 * - editFilesFromPrompt - A function that handles the prompt to edit files.
 * - EditFilesFromPromptInput - The input type for the editFilesFromPrompt function.
 * - EditFilesFromPromptOutput - The return type for the editFilesFromPrompt function.
 */

import {z} from 'genkit';
import { ModelId, availableModels } from '@/lib/models';

const EditFilesFromPromptInputSchema = z.object({
  fileContent: z.string().describe('The content of the file to be edited.'),
  prompt: z.string().describe('Instructions on how to edit the file content.'),
  model: z.enum(availableModels).optional().describe('The model to use for generation.'),
});
export type EditFilesFromPromptInput = z.infer<typeof EditFilesFromPromptInputSchema>;

const EditFilesFromPromptOutputSchema = z.object({
    fileContent: z.string().describe('The full, edited content of the file.'),
});
export type EditFilesFromPromptOutput = z.infer<typeof EditFilesFromPromptOutputSchema>;

export async function editFilesFromPrompt(input: EditFilesFromPromptInput): Promise<EditFilesFromPromptOutput> {
  await new Promise(resolve => setTimeout(resolve, 200));

  const editedContent = `/* 
  * AI-SIMULATED EDIT 
  * Your instruction was: "${input.prompt}"
  * The original content has been commented out below and this new content was added to simulate the edit.
  */
  
  .edited-by-ai {
    border: 2px solid limegreen;
    padding: 1rem;
    background-color: #f0fff0;
  }

  /*
  --- ORIGINAL CONTENT ---
  ${input.fileContent}
  */
  `;

  return { fileContent: editedContent };
}
