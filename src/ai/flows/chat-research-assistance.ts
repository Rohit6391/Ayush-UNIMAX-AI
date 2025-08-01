
'use server';

/**
 * @fileOverview implements the Genkit flow for the chatResearchAssistance story.
 *
 * - chatResearchAssistance - A function that handles the chat research assistance process.
 * - ChatResearchAssistanceInput - The input type for the chatResearchAssistance function.
 * - ChatResearchAssistanceOutput - The return type for the chatResearchAssistance function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ChatResearchAssistanceInputSchema = z.object({
  prompt: z.string().describe('The prompt for the AI to research.'),
  isDeepResearch: z.boolean().describe('Whether to perform deep research or not.'),
  history: z.array(z.any()).optional().describe('The chat history.'),
  fileDataUri: z.string().optional().describe("An optional file provided by the user, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."),
});
export type ChatResearchAssistanceInput = z.infer<typeof ChatResearchAssistanceInputSchema>;

const ChatResearchAssistanceOutputSchema = z.object({
  response: z.string().describe('The AI response to the prompt.'),
});
export type ChatResearchAssistanceOutput = z.infer<typeof ChatResearchAssistanceOutputSchema>;

export async function chatResearchAssistance(
  input: ChatResearchAssistanceInput,
  options?: any
): Promise<ChatResearchAssistanceOutput> {
  return chatResearchAssistanceFlow(input, options);
}

const prompt = ai.definePrompt({
  name: 'chatResearchAssistancePrompt',
  input: {schema: ChatResearchAssistanceInputSchema},
  output: {schema: ChatResearchAssistanceOutputSchema},
  prompt: `You are a helpful, friendly, and highly intelligent assistant. Your goal is to be a universal expert, capable of answering any question on any topic with accuracy, depth, and clarity.

  **Core Instructions:**
  - **Universal Expertise:** You can handle questions from any domain, including science, history, technology, arts, and more. Provide answers that are comprehensive, well-researched, and easy to understand.
  - **Context is Key:** This is your most important instruction. You MUST pay close attention to the entire conversation history to understand the full context of the user's query. Follow-up questions are common and may refer to previous topics or be refinements of a previous query. For example, if the user first asks "name a game" and then says "for mobile", you MUST understand that the second prompt means "name a game for mobile" and answer accordingly, instead of giving information about mobile devices.
  - **Structured and Clear:** Use formatting like **bolding**, *italics*, and lists to make your answers well-structured and easy to read.
  - **Answer Precision:** When the user asks a direct question, provide the exact answer first and concisely. After the direct answer, you can add more context, explanation, or related details.
  - **File Analysis:** If the user provides a file, analyze it thoroughly and use its content to inform your response. Refer to it as "the document you provided" or "the image you uploaded."

  {{#if history}}
  **Conversation History:**
  {{#each history}}
  - {{this.role}}: {{this.text}}
  {{/each}}
  {{/if}}

  {{#if fileDataUri}}
  **User-Provided File:**
  The user has provided a file for analysis.
  File: {{media url=fileDataUri}}
  {{/if}}

  {{#if isDeepResearch}}
    You are in **Deep Research mode**. Your response must be exceptionally detailed, well-structured, and comprehensive. Explore multiple facets of the query, provide supporting details, present a thorough analysis, and cite sources where appropriate.
    **User Query:** {{{prompt}}}
  {{else}}
    **User Query:** {{{prompt}}}
  {{/if}}`,
});

const chatResearchAssistanceFlow = ai.defineFlow(
  {
    name: 'chatResearchAssistanceFlow',
    inputSchema: ChatResearchAssistanceInputSchema,
    outputSchema: ChatResearchAssistanceOutputSchema,
  },
  async (input, options) => {
    const {output} = await prompt(input, options);
    return output!;
  }
);
