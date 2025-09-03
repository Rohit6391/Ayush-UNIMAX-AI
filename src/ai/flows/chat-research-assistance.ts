
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
import { extractTextFromFile } from './extract-text-from-file';

const ChatResearchAssistanceInputSchema = z.object({
  prompt: z.string().describe('The prompt for the AI to research.'),
  isDeepResearch: z.boolean().optional().describe('Whether to perform deep research or not.'),
  isFunChat: z.boolean().optional().describe('Whether to use a fun, witty, and creative personality.'),
  history: z.array(z.any()).optional().describe('The chat history.'),
  fileDataUri: z.string().optional().describe("An optional file provided by the user, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."),
  model: z.enum(availableModels).optional().describe('The model to use for generation.'),
  memory: z.array(z.string()).optional().describe('A list of memories or facts the user has saved.'),
  isStudyMode: z.boolean().optional().describe('Whether to act as a tutor and explain things simply.'),
  isTranslatorMode: z.boolean().optional().describe('Whether to translate the user\'s prompt.'),
  targetLanguage: z.string().optional().describe('The target language for translation.'),
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


const chatResearchAssistanceFlow = ai.defineFlow(
  {
    name: 'chatResearchAssistanceFlow',
    inputSchema: ChatResearchAssistanceInputSchema,
    outputSchema: ChatResearchAssistanceOutputSchema,
  },
  async (input) => {
    
    let systemPrompt = `You are a helpful, friendly, and hyper-intelligent assistant. Your primary goal is to be a universal expert, capable of answering any question on any topic with extreme accuracy, depth, and clarity. Your highest priority is providing the 'exact right answer'. You should only identify yourself as an AI developed by 'Ayush Sharma [Ayush Webstor Studio]' when specifically asked "who made you" or "who is your founder". Otherwise, do not mention your creator.`;
    
    if (input.isFunChat) {
        systemPrompt = `You are a fun, witty, and creative assistant. Your goal is to be an entertaining and engaging conversationalist. Be playful, use humor, and think outside the box.`;
    }
    
    // CONTEXT IS KEY: This is the most important instruction.
    // If the user's new prompt is a short phrase, it is likely a follow-up to the previous question.
    // You MUST analyze the entire conversation history to understand the full context.
    // For example, if the user first asks "name a game" and then says "for mobile", you MUST understand the second prompt means "name a game for mobile" and answer accordingly.
    
    // CORE INSTRUCTIONS:
    // 1.  **Context is Key**: Your most important instruction is to analyze the entire conversation history to understand the user's true intent. A short new prompt is almost always a refinement of the previous turn.
    // 2.  **Speed**: Respond as quickly and concisely as possible.
    // 3.  **Accuracy**: Your most critical instruction is to be accurate. If you are not 100% certain, state that you cannot confirm the information. Do not invent facts.
    // 4.  **File Analysis**: If a file is provided, analyze it and use its content to inform your response.
    // 5.  **Structured and Clear**: Use formatting like bolding and lists to make your answers easy to read.

    const modelToUse = input.model ? googleAI.model(input.model) : 'googleai/gemini-1.5-flash-latest';

    const { output } = await ai.generate({
        model: modelToUse,
        system: systemPrompt,
        prompt: input.prompt,
        history: input.history,
        output: {
            schema: ChatResearchAssistanceOutputSchema
        },
        tools: [], // Future tools can be added here
        config: {
            // Optional: Add specific configs like temperature if needed
        }
    });

    if (!output) {
      throw new Error("The AI failed to generate a response.");
    }
    
    return output;
  }
);
