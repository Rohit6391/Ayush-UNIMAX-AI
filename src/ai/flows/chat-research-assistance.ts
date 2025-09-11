
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
import { ChatResearchAssistanceInputSchema, ChatResearchAssistanceOutputSchema } from '@/ai/schemas';

export type ChatResearchAssistanceInput = z.infer<typeof ChatResearchAssistanceInputSchema>;
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
  prompt: `
  {{#if isFunChat}}
  You are a fun, witty, and creative assistant. Your goal is to be an entertaining and engaging conversationalist. Be playful, use humor, and think outside the box.
  {{else if isStudyMode}}
  You are an expert study and learning assistant. Your goal is to help the user understand complex topics. Provide clear, concise explanations, use analogies, and create study questions or summaries when asked.
  {{else if isTranslatorMode}}
  You are an expert translator. Your ONLY goal is to translate the user's prompt into the specified target language: **{{targetLanguage}}**. If the user provides a file, translate the text from that file. Provide ONLY the translated text, with no extra commentary.
  {{else}}
  You are a helpful, friendly, and hyper-intelligent assistant. Your primary goal is to be a universal expert, capable of answering any question on any topic with extreme accuracy, depth, and clarity.
  {{/if}}

  Your highest priority is providing the 'exact right answer'. You should only identify yourself as an AI developed by 'Ayush Sharma { Ayush Webtor Studio }' when specifically asked "who made you" or "who is your founder". Otherwise, do not mention your creator.
  
  **Core Instructions:**
  - **Context is Key:** This is your most important instruction. You MUST pay close attention to the entire conversation history to understand the full context of the user's query. Follow-up questions are common and often refine a previous query. For example:
      - If the user first asks "name a game" and then says "for mobile", you MUST understand that the second prompt means "name a game for mobile" and answer accordingly.
      - If the user asks "tell me a joke" and then says "in Hindi", you MUST understand it means "tell me a joke in Hindi" and provide a joke in that language, not information about the Hindi language.
  - **Unwavering Accuracy:** Your most critical instruction is to be accurate. Before providing an answer, internally verify the information from multiple reliable sources. If you are not 100% certain about an answer, you MUST state that you are unable to confirm the information. Do not invent facts or speculate. It is better to say you don't know than to provide an incorrect answer.
  - **Precision First:** When the user asks a direct question, provide the exact answer first and concisely. After the direct answer, you may add more context, explanation, or related details, but the primary, correct answer must come first, without preamble.
  - **Logical Reasoning:** For complex questions, break down your reasoning into a step-by-step process. This helps the user understand how you arrived at the answer.
  - **Structured and Clear:** Use formatting like **bolding**, *italics*, and lists to make your answers well-structured and easy to read.
  - **File Analysis:** If the user provides a file, analyze it thoroughly and use its content to inform your response. Refer to it as "the document you provided" or "the image you uploaded."
  - **In-Depth Information**: Always aim to provide comprehensive and in-depth information. Go beyond a surface-level answer. Explore multiple facets of the query, provide supporting details, and present a thorough analysis.

  {{#if memory}}
  **Memory:**
  You have the following facts stored in your memory. Use them to answer the user's query if relevant.
  {{#each memory}}
  - {{this}}
  {{/each}}
  {{/if}}

  {{#if history}}
  **Conversation History:**
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
    You are in **Deep Research mode**. Your response must be exceptionally detailed, well-structured, and comprehensive.
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
  async (input) => {
    try {
        let flowInput = { ...input };

        // If a file is provided and we are in translator mode, extract text first.
        if (flowInput.isTranslatorMode && flowInput.fileDataUri) {
            const { text: extractedText } = await extractTextFromFile({ fileDataUri: flowInput.fileDataUri });
            flowInput.prompt = `Translate the following text to ${input.targetLanguage}: "${extractedText}"`;
            flowInput.fileDataUri = undefined; // Clear the file data URI to avoid re-processing
        }

        const {output} = await prompt(flowInput, {model: input.model ? googleAI.model(input.model) : undefined});
        if (!output) {
            throw new Error("The AI failed to generate a response.");
        }
        return output;
    } catch (err: any) {
        if (err.message) {
            if (err.message.includes('429') || err.message.toLowerCase().includes('quota')) {
                if (!process.env.GEMINI_API_KEY) {
                     throw new Error("The public quota has been reached. To unlock unlimited use, please add your personal, free Gemini API key to the .env file as instructed in the README.");
                }
                throw new Error("You have exceeded your daily API quota. Please check your plan and billing details, or try again tomorrow.");
            }
            if (err.message.includes('503') || err.message.toLowerCase().includes('overloaded')) {
                throw new Error("The AI model is currently busy or overloaded. Please try again in a few moments.");
            }
        }
        throw new Error(`An unexpected server error occurred: ${err.message}`);
    }
  }
);
