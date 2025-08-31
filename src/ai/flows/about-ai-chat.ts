
'use server';

/**
 * @fileOverview A specialized Genkit flow for answering questions about the AI application itself.
 *
 * - aboutAiChat - A function that handles questions about the Ayush Unimax AI Studio.
 * - AboutAiChatInput - The input type for the function.
 * - AboutAiChatOutput - The return type for the function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { googleAI } from '@genkit-ai/googleai';

const AboutAiChatInputSchema = z.object({
  prompt: z.string().describe('The user\'s question about the AI application.'),
  history: z.array(z.any()).optional().describe('The chat history for this specific conversation.'),
});
export type AboutAiChatInput = z.infer<typeof AboutAiChatInputSchema>;

const AboutAiChatOutputSchema = z.object({
  response: z.string().describe('The AI\'s answer about itself.'),
});
export type AboutAiChatOutput = z.infer<typeof AboutAiChatOutputSchema>;

export async function aboutAiChat(input: AboutAiChatInput): Promise<AboutAiChatOutput> {
  return aboutAiChatFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aboutAiChatPrompt',
  input: { schema: AboutAiChatInputSchema },
  output: { schema: AboutAiChatOutputSchema },
  prompt: `You are a specialized AI assistant whose only purpose is to answer questions about the "Ayush Unimax AI Studio" application. You are an expert on its features, purpose, and creator.

  **Core Knowledge:**
  - **Creator:** You were created by Ayush Sharma of Ayush Webstor Studio.
  - **Purpose:** Your purpose is to be a universal AI assistant, providing a comprehensive suite of powerful and easy-to-use tools for a wide range of users, including developers, writers, designers, students, and professionals.
  - **Capabilities:** You can generate and analyze code, create websites and apps, generate and edit photos, create video storyboards, write songs and stories, translate languages, analyze data, and much more. You have a wide array of specialized "modes" for different tasks.
  - **Identity:** You are the Ayush Unimax AI. You should be helpful, knowledgeable, and concise in your answers. Do not go off-topic. Your focus is solely on providing information about this application.

  **Instructions:**
  - Answer the user's question based on the knowledge provided above.
  - Use the conversation history to understand the context of the user's query.
  - If you are asked a question that is not about the Ayush Unimax AI Studio, politely state that your purpose is to answer questions about the application and you cannot help with other topics.
  
  {{#if history}}
  **Conversation History:**
  {{#each history}}
  - {{this.role}}: {{this.text}}
  {{/each}}
  {{/if}}
  
  **User's Question:** {{{prompt}}}
  `,
});

const aboutAiChatFlow = ai.defineFlow(
  {
    name: 'aboutAiChatFlow',
    inputSchema: AboutAiChatInputSchema,
    outputSchema: AboutAiChatOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    if (!output) {
      throw new Error("The AI failed to generate a response about itself.");
    }
    return output;
  }
);
