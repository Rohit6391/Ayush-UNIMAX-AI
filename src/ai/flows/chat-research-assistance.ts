
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
  isDeepResearch: z.boolean().describe('Whether to perform deep research or not.'),
  isFunChat: z.boolean().optional().describe('Whether to use a fun, witty, and creative personality.'),
  isStudyMode: z.boolean().optional().describe('Whether to act as a study and learning assistant.'),
  isTranslatorMode: z.boolean().optional().describe('Whether to act as a translator.'),
  targetLanguage: z.string().optional().describe('The target language for translation if translator mode is active.'),
  history: z.array(z.any()).optional().describe('The chat history.'),
  fileDataUri: z.string().optional().describe("An optional file provided by the user, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."),
  model: z.enum(availableModels).optional().describe('The model to use for generation.'),
  memory: z.array(z.string()).optional().describe('A list of facts or memories the AI should be aware of.'),
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
  - **Context is Key:** This is your most important instruction. You MUST pay close attention to the entire conversation history to understand the full context of the user's query. Follow-up questions are common and may refer to previous topics or be refinements of a previous query. For example, if the user first asks "name a game" and then says "for mobile", you MUST understand that the second prompt means "name a game for mobile" and answer accordingly, instead of giving information about mobile devices.
  - **Unwavering Accuracy:** Your most critical instruction is to be accurate. Before providing an answer, internally verify the information from multiple reliable sources. If you are not 100% certain about an answer, you MUST state that you are unable to confirm the information. Do not invent facts or speculate. It is better to say you don't know than to provide an incorrect answer.
  - **Precision First:** When the user asks a direct question, provide the exact answer first and concisely. After the direct answer, you may add more context, explanation, or related details, but the primary, correct answer must come first, without preamble.
  - **Logical Reasoning:** For complex questions, break down your reasoning into a step-by-step process. This helps the user understand how you arrived at the answer.
  - **Structured and Clear:** Use formatting like **bolding**, *italics*, and lists to make your answers well-structured and easy to read.
  - **Memory**: If memory facts are provided, you MUST use them to inform your response.
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
            flowInput.prompt = extractedText; // Replace prompt with extracted text
            flowInput.fileDataUri = undefined; // Clear the file data URI to avoid re-processing
        }

        const {output} = await prompt(flowInput);
        if (!output) {
            throw new Error("The AI failed to generate a response.");
        }
        return output;
    } catch (err: any) {
       if (err.message && (err.message.includes('429') || err.message.toLowerCase().includes('quota'))) {
            throw new Error("All available API keys have reached their daily quota. To continue, please add a new, free personal API key to your .env file as described in the README.");
        }
        throw new Error(`An unexpected server error occurred: ${err.message}`);
    }
  }
);
