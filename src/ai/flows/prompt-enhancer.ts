
'use server';

/**
 * @fileOverview An AI agent that enhances a user's prompt to be more effective. This is an offline simulation.
 *
 * - enhancePrompt - A function that handles the prompt enhancement.
 * - EnhancePromptInput - The input type for the function.
 * - EnhancePromptOutput - The return type for the function.
 */

import { z } from 'genkit';
import { ModelId, availableModels } from '@/lib/models';

const EnhancePromptInputSchema = z.object({
  prompt: z.string().describe('The user-written prompt to be enhanced.'),
  model: z.enum(availableModels).optional().describe('The model to use for generation.'),
});
export type EnhancePromptInput = z.infer<typeof EnhancePromptInputSchema>;

const EnhancePromptOutputSchema = z.object({
  enhancedPrompt: z.string().describe('The rewritten, more effective prompt.'),
});
export type EnhancePromptOutput = z.infer<typeof EnhancePromptOutputSchema>;

export async function enhancePrompt(input: EnhancePromptInput): Promise<EnhancePromptOutput> {
    // In this offline version, we will just add a simple prefix to show it was "enhanced".
    await new Promise(resolve => setTimeout(resolve, 50)); // Simulate processing delay

    const enhancedPrompt = `A detailed, high-quality, and creative version of: ${input.prompt}`;
    
    return {
        enhancedPrompt
    };
}
