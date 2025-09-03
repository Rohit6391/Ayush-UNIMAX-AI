
'use server';

/**
 * @fileOverview implements the Genkit flow for the chatResearchAssistance story.
 *
 * - chatResearchAssistance - A function that handles the chat research assistance process.
 * - ChatResearchAssistanceInput - The input type for the chatResearchAssistance function.
 * - ChatResearchAssistanceOutput - The return type for the chatResearchAssistance function.
 */

import { z } from 'genkit';

const ChatResearchAssistanceInputSchema = z.object({
  prompt: z.string().describe('The prompt for the AI to research.'),
  isDeepResearch: z.boolean().optional().describe('Whether to perform deep research or not.'),
  isFunChat: z.boolean().optional().describe('Whether to use a fun, witty, and creative personality.'),
  history: z.array(z.any()).optional().describe('The chat history.'),
  fileDataUri: z.string().optional().describe("An optional file provided by the user, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."),
});
export type ChatResearchAssistanceInput = z.infer<typeof ChatResearchAssistanceInputSchema>;

const ChatResearchAssistanceOutputSchema = z.object({
  response: z.string().describe('The AI response to the prompt.'),
});
export type ChatResearchAssistanceOutput = z.infer<typeof ChatResearchAssistanceOutputSchema>;

export async function chatResearchAssistance(
  input: ChatResearchAssistanceInput
): Promise<ChatResearchAssistanceOutput> {
    // This is a simulated offline response.
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
    
    let responseText = `I have received your message: "${input.prompt}". As an offline simulation, I cannot generate a dynamic response, but I can acknowledge your input.`;
    
    if(input.isFunChat) {
        responseText = `Woohoo! You said: "${input.prompt}". I'm an offline AI, but I'm still ready to party! Let's pretend I said something hilarious and witty back.`;
    }
    
    if (input.fileDataUri) {
        responseText += `\n\nI also see you've uploaded a file. Great! I've "analyzed" it and it looks... file-like.`;
    }

    return {
        response: responseText
    };
}
