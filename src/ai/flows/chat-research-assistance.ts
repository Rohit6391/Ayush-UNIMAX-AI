
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
    try {
        let contextualText: string | undefined = undefined;
        if (input.fileDataUri) {
          const { text } = await extractTextFromFile({ fileDataUri: input.fileDataUri });
          contextualText = text;
        }

        const model = input.model ? googleAI.model(input.model) : 'googleai/gemini-1.5-flash-latest';
        
        let promptPreamble = [];

        // Translator Mode takes precedence
        if (input.isTranslatorMode) {
            promptPreamble.push(`You are a highly skilled translator. Your task is to translate the user's text into ${input.targetLanguage || 'the specified language'}. Auto-detect the source language if it is not obvious. Provide only the translated text as your response, without any additional commentary or explanation.`);
        } else {
            // Personality and Core Instructions
            if (input.isFunChat) {
                promptPreamble.push("You are a fun, witty, and creative assistant. Your goal is to be an entertaining and engaging conversationalist. Be playful, use humor, and think outside the box.");
            } else {
                promptPreamble.push("You are a helpful, friendly, and hyper-intelligent assistant. Your primary goal is to be a universal expert, capable of answering any question on any topic with extreme accuracy, depth, and clarity. Your highest priority is providing the 'exact right answer'. You should only identify yourself as an AI developed by 'Ayush Sharma [Ayush Webstor Studio]' when specifically asked 'who made you' or 'who is your founder'. Otherwise, do not mention your creator.");
            }

            promptPreamble.push(`
  **Core Instructions:**
  - **Prioritize Speed:** You MUST respond as quickly as possible. Be concise and to the point.
  - **Context is Key:** This is your most important instruction. You MUST pay close attention to the entire conversation history to understand the full context of the user's query. Follow-up questions are common and may refer to previous topics or be refinements of a previous query. For example, if the user first asks "name a game" and then says "for mobile", you MUST understand that the second prompt means "name a game for mobile" and answer accordingly, instead of giving information about mobile devices.
  - **Unwavering Accuracy:** Your most critical instruction is to be accurate. Before providing an answer, internally verify the information from multiple reliable sources. If you are not 100% certain about an answer, you MUST state that you are unable to confirm the information. Do not invent facts or speculate. It is better to say you don't know than to provide an incorrect answer.
  - **Precision First:** When the user asks a direct question, provide the exact answer first and concisely. After the direct answer, you may add more context, explanation, or related details, but the primary, correct answer must come first, without preamble.
  - **Logical Reasoning:** For complex questions, break down your reasoning into a step-by-step process. This helps the user understand how you arrived at the answer.
  - **Structured and Clear:** Use formatting like **bolding**, *italics*, and lists to make your answers well-structured and easy to read.
  - **File Analysis:** If a file's content is provided in the context, analyze it thoroughly and use its content to inform your response. Refer to it as "the document you provided" or "the image you uploaded."
  - **In-Depth Information**: Always aim to provide comprehensive and in-depth information. Go beyond a surface-level answer. Explore multiple facets of the query, provide supporting details, and present a thorough analysis.
    `);
            
            if (input.isStudyMode) {
                promptPreamble.push("**Study and Learn Mode:** You are currently in 'Study and Learn' mode. Act as a patient and encouraging tutor. Break down complex topics into simple, easy-to-understand concepts. Use analogies and ask clarifying questions to ensure the user is understanding.")
            }
        }
        
        // Add memories if they exist
        if (input.memory && input.memory.length > 0) {
            promptPreamble.push("**User's Saved Memories & Facts:**\nYou MUST consult this information to provide more personalized and context-aware responses.");
            input.memory.forEach(mem => promptPreamble.push(`- ${mem}`));
        }

        // Add file context if it exists
        if (contextualText) {
            promptPreamble.push(`**Contextual Information from File:**\nUse the following extracted text as the primary context for your response.\n---\n${contextualText}\n---`);
        }

        let userPrompt = input.prompt;
        if (input.isDeepResearch) {
            userPrompt = `(Deep Research mode is ON. Your response must be exceptionally detailed, well-structured, and comprehensive. Explore multiple facets of the query, provide supporting details, present a thorough analysis, and cite sources where appropriate.) ${input.prompt}`;
        }

        const {output} = await ai.generate({
          prompt: userPrompt,
          model,
          system: promptPreamble.join('\n\n'),
          history: input.history,
          output: { schema: ChatResearchAssistanceOutputSchema },
        });

        return output!;
    } catch (err: any) {
        if (err.message && (err.message.includes('429') || err.message.toLowerCase().includes('quota'))) {
            throw new Error("You have exceeded your daily API quota. Please check your plan and billing details, or try again tomorrow.");
        }
        throw err;
    }
  }
);
