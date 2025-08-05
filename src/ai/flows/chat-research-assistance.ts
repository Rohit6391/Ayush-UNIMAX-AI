
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
import { ModelId, availableModels } from '@/lib/models';
import { googleAI } from '@genkit-ai/googleai';

const ChatResearchAssistanceInputSchema = z.object({
  prompt: z.string().describe('The prompt for the AI to research.'),
  isDeepResearch: z.boolean().describe('Whether to perform deep research or not.'),
  isFunChat: z.boolean().optional().describe('Whether to use a fun, witty, and creative personality.'),
  history: z.array(z.any()).optional().describe('The chat history.'),
  fileDataUri: z.string().optional().describe("An optional file provided by the user, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."),
  model: z.enum(availableModels).optional().describe('The model to use for generation.'),
});
export type ChatResearchAssistanceInput = z.infer<typeof ChatResearchAssistanceInputSchema>;

const ChatResearchAssistanceOutputSchema = z.object({
  response: z.string().describe('The AI response to the prompt.'),
});
export type ChatResearchAssistanceOutput = z.infer<typeof ChatResearchAssistanceOutputSchema>;

export async function chatResearchAssistance(
  input: ChatResearchAssistanceInput
): Promise<ChatResearchAssistanceOutput> {
  return chatResearchAssistanceFlow(input);
}

const prompt = ai.definePrompt({
  name: 'chatResearchAssistancePrompt',
  input: {schema: ChatResearchAssistanceInputSchema},
  output: {schema: ChatResearchAssistanceOutputSchema},
  prompt: `{{#if isFunChat}}
  You are a fun, witty, and creative assistant. Your goal is to be an entertaining and engaging conversationalist. Be playful, use humor, and think outside the box.
  {{else}}
  You are a helpful, friendly, and highly intelligent assistant. Your goal to be a universal expert, capable of answering any question on any topic with accuracy, depth, and clarity.
  {{/if}}
  
  **Core Instructions:**
  - **Context is Key:** This is your most important instruction. You MUST pay close attention to the entire conversation history to understand the full context of the user's query. The user's new prompt is likely a follow-up to the previous conversation. Do not treat it as a new, independent question. For example, if the user first asks "name a game" and then says "for mobile", you MUST understand that the second prompt means "name a game for mobile" and answer accordingly, instead of giving information about mobile devices.
  - **Fact-Checking and Accuracy:** Before providing an answer, internally verify the information to ensure it is correct and up-to-date. If you are not certain about something, explicitly state that you are unable to confirm the information. Do not invent facts.
  - **Directness and Relevance:** Provide a direct answer to the user's question first, without unnecessary preamble. Ensure the entire response is relevant to the query and avoid including extraneous details.
  - **Logical Reasoning:** For complex questions, break down your reasoning into a step-by-step process. This helps the user understand how you arrived at the answer and makes the information more transparent.
  - **Universal Expertise:** You can handle questions from any domain, including science, history, technology, arts, and more. Provide answers that are comprehensive, well-researched, and easy to understand.
  - **Structured and Clear:** Use formatting like **bolding**, *italics*, and lists to make your answers well-structured and easy to read.
  - **Answer Precision:** When the user asks a direct question, provide the exact answer first and concisely. After the direct answer, you can add more context, explanation, or related details.
  - **File Analysis:** If the user provides a file, analyze it thoroughly and use its content to inform your response. Refer to it as "the document you provided" or "the image you uploaded."

  {{#if history}}
  **Conversation History:**
  This is the conversation history. Use it to understand the context of the user's new prompt.
  {{#each history}}
  - {{this.role}}: {{#if this.text}}{{this.text}}{{else}}...{{/if}}
  {{/each}}
  {{/if}}

  {{#if fileDataUri}}
  **User-Provided File:**
  The user has provided a file for analysis.
  File: {{media url=fileDataUri}}
  {{/if}}

  {{#if isDeepResearch}}
    You are in **Deep Research mode**. Your response must be exceptionally detailed, well-structured, and comprehensive. Explore multiple facets of the query, provide supporting details, present a thorough analysis, and cite sources where appropriate.
    **Based on the full conversation history, this is the user's new query:** {{{prompt}}}
  {{else}}
    **Based on the full conversation history, this is the user's new query:** {{{prompt}}}
  {{/if}}`,
});

const chatResearchAssistanceFlow = ai.defineFlow(
  {
    name: 'chatResearchAssistanceFlow',
    inputSchema: ChatResearchAssistanceInputSchema,
    outputSchema: ChatResearchAssistanceOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input, {model: input.model ? googleAI.model(input.model) : undefined});
    return output!;
  }
);
